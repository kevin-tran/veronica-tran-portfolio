import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

import './index.scss'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Nav />
      {children()}
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`