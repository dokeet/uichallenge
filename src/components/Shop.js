import React, { useEffect } from "react"
import ShopItem from "./ShopItem"
import { Context } from "../context/Context"
import styles from "../components/Shop.module.css"
export default function Shop() {
  const { state, dispatch } = React.useContext(Context)
  const [number, setNumber] = React.useState()
  useEffect(() => {
    dispatch({type: "FILTER", payload: number})
  }, [])
  return (
    <>
      <h1>Almacen</h1>
      <div className={styles.gridContainer}>
        {state.products.map(item => {
          return <ShopItem key={item.id} {...item} fromDispatch={dispatch} />
        })}
         <input type="range" id="start" name="volume"
         min="0" max="11"></input>
      </div>
    </>
  )
}
