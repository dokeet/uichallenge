import React from "react"
import axios from "axios"
import PropTypes from "prop-types"
import Logo from "../images/arrow.svg"
import ShoppingCart from "../images/shopping-cart.svg"
import styles from "../components/header.module.scss"

const Header = ({ totalAmount, shopCounter }) => {
  const [dollar, setDollar] = React.useState(1)
  const [showPriceInDollars, setShowPriceInDollars] = React.useState(false)

  React.useEffect(() => {
    const fetchDollarPrice = async () => {
      const price = await axios("https://challenge-api.aerolab.co/dollar")
      setDollar(price.data.rate)
      return price.data.price;
    }
    fetchDollarPrice()
  }, [])
  return (
    <header className={styles.header}>
      <img
        className={styles.image}
        src={Logo}
        height="30px"
        alt="Ezshop Logo"
      />

      <div className={styles.title}>
        <h3 style={{ fontWeight: 600 }}>
          <strong>Ez</strong>shop
        </h3>
        <div className={styles.shoppingCart}>
          {!showPriceInDollars ? (
            <div onClick={() => setShowPriceInDollars(!showPriceInDollars)}>
              <h3 style={{ marginRight: "1.5rem"}}>
                ${parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2)}
              </h3>
            </div>
          ) : (
            <div onClick={() => setShowPriceInDollars(!showPriceInDollars)}>
              <h3 style={{ marginRight: "1.5rem" }} >
                US$ {" "}
                {parseFloat(
                  Math.round(totalAmount * 100) / 100 / dollar
                ).toFixed(2)}
              </h3>
            </div>
          )}

          <img src={ShoppingCart} height="30px" alt="Shopping Cart" />
          <div className={styles.cartCounter} data-counter={shopCounter} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  totalAmount: PropTypes.number,
  shopCounter: PropTypes.number,
}

export default Header
