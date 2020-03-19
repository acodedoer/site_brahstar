import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Clients = () => (
  <Layout page="clients">
    <SEO title="Clients" />
    <h1>Clients</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Clients