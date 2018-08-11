import React from 'react'
import Slider from '../components/slider'

import styles from './info.module.scss'

const FunPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <div style={{ height: `22.7em` }}>
      <Slider />
    </div>
  </div>
)

export default FunPage
