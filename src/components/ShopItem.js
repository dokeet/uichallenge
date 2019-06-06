import React from "react"
import styles from "../components/shopItem.module.css"
export default function ShopItem({
  photo,
  name,
  price,
  amount,
  id,
  fromDispatch,
}) {
  return (
    <>
      <div className={styles.shopItemContainer}>
        <img src={photo} alt={`${name}`} />
        <p>{name}</p>
        <p>{price}</p>
        {amount >= 1 ? (
          <div>
            <button
              onClick={() =>
                fromDispatch({ type: "SUBSTRACT_FROM_CART", payload: id })
              }
            >
              -
            </button>
            {amount}
            <button
              onClick={() => fromDispatch({ type: "ADD_TO_CART", payload: id })}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => fromDispatch({ type: "ADD_TO_CART", payload: id })}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </>
  )
}
