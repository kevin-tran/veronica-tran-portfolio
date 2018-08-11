import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Nav from '../components/nav'

import './index.scss'

const Layout = ({ children }) => (
  <Fragment>
    <Nav />
    <Header />
    <main>
      {children()}
    </main>
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