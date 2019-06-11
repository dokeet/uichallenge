import React from "react"
import PropTypes from "prop-types"
import Logo from "../images/arrow.svg"
import ShoppingCart from "../images/shopping-cart.svg"
import styles from "../components/header.module.scss"

const Header = ({ siteTitle, totalAmount, shopCounter }) => {
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
          <h3 style={{ marginRight: "1.5rem" }}>${parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2)}</h3>
          <img src={ShoppingCart} height="30px" alt="Shopping Cart" />
          <div className={styles.cartCounter} data-counter={shopCounter} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
