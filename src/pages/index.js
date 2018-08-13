import React from 'react'
import Minesweeper from '../components/minesweeper'
import Layout from '../components/layout'

import styles from './index.module.scss'

class IndexPage extends React.Component {

  render() {
    return (
      <Layout styles={styles.container}>
      <Minesweeper />
      </Layout>
    );
  }
}

export default IndexPage
