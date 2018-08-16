import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Nav from '../nav'
import Minesweeper from '../Minesweeper'

import './index.scss'
import '../../fonts/space-grotesk-regular.woff2'

const Layout = ({ children, ...rest }) => (
  <div {...rest} style={{ width: '100%' }}>
    <Nav />
    <Header />
    <main>
      {children}
    </main>
    <Minesweeper />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout