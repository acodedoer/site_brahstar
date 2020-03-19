import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout page="contact">
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact