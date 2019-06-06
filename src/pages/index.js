import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Shop from "../components/Shop"
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
