import React from "react"
import styles from "../components/ShopItem.module.scss"
export default function ShopItem({
  photo,
  name,
  price,
  counter,
  i,
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
          {counter >= 1 ? (
            <div className={styles.amounts}>
              <button
                onClick={() =>
                  fromDispatch({ type: "SUBSTRACT_FROM_CART", payload: i })
                }
              >
                -
              </button>
              <span className={styles.amount}>{counter}</span>
              <button
                onClick={() =>
                  fromDispatch({ type: "ADD_TO_CART", payload: i })
                }
              >
                +
              </button>
            </div>
          ) : (
            <div className={styles.amounts}>
              <button
                onClick={() =>
                  fromDispatch({ type: "ADD_TO_CART", payload: i })
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
