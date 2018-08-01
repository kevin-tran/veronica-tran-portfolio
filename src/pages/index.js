import React from 'react'
import Sphere from '../components/sphere'

import styles from './index.module.scss'

class IndexPage extends React.Component {

  render() {
    const { transition } = this.props;

    return (
      <div style={transition && transition.style} className={styles.container}>
        <Sphere />
      </div>
    );
  }
}

export default IndexPage
