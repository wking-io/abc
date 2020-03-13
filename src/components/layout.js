// Dependencies
import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/zof0vwu.css" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
