import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Nav from '../nav'

import './index.scss'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <Nav />
    <Header />
    <main>
      {children}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout