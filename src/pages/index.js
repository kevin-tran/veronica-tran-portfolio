import React from 'react'
import Minesweeper from '../components/minesweeper'

import styles from './index.module.scss'

class IndexPage extends React.Component {

  render() {
    const { transition } = this.props;

    return (
      <div style={transition && transition.style} styles={styles.container}>
      <Minesweeper />
      </div>
    );
  }
}

export default IndexPage
