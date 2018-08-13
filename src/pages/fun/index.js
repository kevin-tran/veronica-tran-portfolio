import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Layout from '../../components/layout'

import styles from './fun.module.scss'

class FunPage extends Component {
  render() {

    return (
      <Layout className={styles.container}>
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
      </Layout>
    )
  }
}

export default FunPage
