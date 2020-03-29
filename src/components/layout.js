// Dependencies
import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ light, children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/zof0vwu.css" />
    </Helmet>
    <Header light={light} />
    {children}
    <Footer />
  </>
)

export default Layout
