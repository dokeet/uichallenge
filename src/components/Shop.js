import React from "react"
import Header from "./header"
import ShopItem from "./ShopItem"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import { Context } from "../context/Context"
import styles from "../components/Shop.module.scss"
import logo from "../images/arrow.svg"
export default function Shop() {
  const { state, dispatch, loadMore } = React.useContext(Context)
  const [offline, setOffline] = React.useState(false)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

  function fetchMore() {
    setIsFetching(false)
    loadMore()
  }
  function handleNetwork() {
    navigator.onLine ? setOffline(false) : setOffline(true)
  }
  React.useEffect(() => {
    window.addEventListener("offline", handleNetwork)
    window.addEventListener("online", handleNetwork)
  }, [])
  
  return (
    <>
      <Header
        shopCounter={state.totalCounter}
        totalAmount={state.totalAmount}
      />
      <h1>Almacén</h1>
      {offline ? (
        <div className={styles.offline}>
          <img src={logo} alt="Ezshop Logo" style={{height: "15px", paddingRight: "0.2rem"}}/>
          <span><strong>Ez</strong>shop can't reach the internet. Try again.</span>
        </div>
      ) : (
        ""
      )}
      <div className={styles.gridContainer}>
        {state.products.map((item, i) => {
          return <ShopItem key={i} {...item} i={i} fromDispatch={dispatch} />
        })}
        {isFetching ? <div>Loading more products</div> : ""}
      </div>
    </>
  )
}
