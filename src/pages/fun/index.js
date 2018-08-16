import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import styles from './fun.module.scss'

class FunPage extends Component {
  render() {

    return (
      <div className={styles.container}>
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
