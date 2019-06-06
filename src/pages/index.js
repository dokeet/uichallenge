import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Shop from "../components/Shop"
import Provider from "../context/Context"

const IndexPage = () => (
  <Provider>
    <Layout>
      <SEO title="Home" />
      <Shop />
    </Layout>
  </Provider>
)

export default IndexPage
