import React, { useEffect } from "react"
import axios from "axios"
import { useImmerReducer } from "use-immer"

export const Context = React.createContext()
const initialState = JSON.parse(window.localStorage.getItem("shop_state")) || {
  products: [],
  totalAmount: 0,
  totalCounter: 0,
  page: 1,
  per_page: 20,
  page_count: 5,
}

const reducer = (draft, action) => {
  switch (action.type) {
    case "FETCH_INITIAL":
      action.payload.data.products.forEach(e => {
        draft.products.push(e)
      })
      return
    case "ADD_TO_CART":
      const price = draft.products[action.payload].price
      const originalPrice = draft.products[action.payload].originalPrice
      draft.products[action.payload].counter++
      draft.totalCounter++
      price < originalPrice
        ? (draft.totalAmount += price)
        : (draft.totalAmount += originalPrice)
      return
    case "SUBSTRACT_FROM_CART":
      const s_price = draft.products[action.payload].price
      const s_originalPrice = draft.products[action.payload].originalPrice
      draft.products[action.payload].counter--
      draft.totalCounter--
      s_price < s_originalPrice
        ? (draft.totalAmount -= s_price)
        : (draft.totalAmount -= s_originalPrice)
      return
    case "FILTER":
      draft.products = draft.products.filter(r => r.price < 50)
      return
    default:
      return
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  const [page, setPage] = React.useState(1)

  // localstorage

  useEffect(() => {
    window.localStorage.setItem("shop_state", JSON.stringify(state));
  }, [state])



  function loadMore() {
    setPage(prevPage => prevPage + 1)
  }
  useEffect(() => {
    if (page <= state.page_count) {
      const fetchData = async page => {
        const res = await axios(
          `https://challenge-api.aerolab.co/products?page=${page}`
        )
        res.data.products.forEach(e => {
          e.counter = 0
          // replace jpg for webp
          e.photo = e.photo.replace("jpg", "webp")
        })
        //filter older elements
        const dateNow = new Date(Date.now())
        res.data.products = res.data.products.filter(elem => {
          const d = new Date(elem.updatedAt)
          const diffTime = Math.abs(d.getTime() - dateNow.getTime())
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          if (diffDays < 30) return true;
        })
        dispatch({ type: "FETCH_INITIAL", payload: res })
        return res
      }
      fetchData(page)
    }
  }, [page])
  return (
    <Context.Provider value={{ state, dispatch, loadMore }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
