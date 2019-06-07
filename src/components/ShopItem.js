import React from "react"
import styles from "../components/ShopItem.module.scss"
export default function ShopItem({
  photo,
  name,
  price,
  amount,
  id,
  originalPrice,
  fromDispatch,
}) {
  return (
    <>
      <div className={styles.shopItemContainer}>
        <img src={photo} alt={`${name}`} />
        <p className={styles.name}>{name}</p>
        {price !== originalPrice ? (
          <span className={styles.priceOffers}>
            <p className={styles.originalPrice}>${originalPrice}</p>
            <p className={styles.price}>${price}</p>
          </span>
        ) : (
          <p className={styles.price}>${originalPrice}</p>
        )}
        <div className={styles.amountWrapper}>
          {amount >= 1 ? (
            <div className={styles.amounts}>
              <button
                onClick={() =>
                  fromDispatch({ type: "SUBSTRACT_FROM_CART", payload: id })
                }
              >
                -
              </button>
              <span className={styles.amount}>{amount}</span>
              <button
                onClick={() =>
                  fromDispatch({ type: "ADD_TO_CART", payload: id })
                }
              >
                +
              </button>
            </div>
          ) : (
            <div className={styles.amounts}>
              <button
                onClick={() =>
                  fromDispatch({ type: "ADD_TO_CART", payload: id })
                }
              >
                Agregar al carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
