import React, { useEffect } from "react"
import Header from "./header"
import ShopItem from "./ShopItem"
import { Context } from "../context/Context"
import styles from "../components/Shop.module.css"
export default function Shop() {
  const { state, dispatch } = React.useContext(Context)

  useEffect(() => {
    // dispatch({type: "FILTER", payload: number})
  }, [])
  return (
    <>
      <Header shopCounter={state.totalAmount} />

      <h1>Almacen</h1>
      <div className={styles.gridContainer}>
        {state.products.map(item => {
          return <ShopItem key={item.id} {...item} fromDispatch={dispatch} />
        })}

      </div>
    </>
  )
}
