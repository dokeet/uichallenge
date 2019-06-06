import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Shop from "../components/shop"
import Context from "../context/Context"
const IndexPage = () => {
  return (
    <Context>
      <Layout>
        <SEO title="Home" />
        <Shop />
      </Layout>
    </Context>
  )
}

export default IndexPage
