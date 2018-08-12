import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import styles from './fun.module.scss'

class FunPage extends Component {
  render() {
    const transition = this.props

    return (
      <div style={transition && transition.style} className={styles.container}>
        <HorizontalScroll className={styles.alignCenter}>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
          <div className={styles.funCard}></div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default FunPage
