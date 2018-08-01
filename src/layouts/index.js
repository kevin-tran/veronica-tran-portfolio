import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sphere from '../components/sphere'
import Nav from '../components/nav'

import './index.scss'

const Layout = ({ children }) => (
  <Fragment>
    <Sphere />
    <Header />
    <Nav />
      {children()}
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