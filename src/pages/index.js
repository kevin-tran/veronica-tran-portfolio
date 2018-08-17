import React from 'react'
import Keyboard from '../components/keyboard'
import WindowSVG from '../components/window'
import Box from '../components/box'

import styles from './index.module.scss'

class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Keyboard />
        <WindowSVG />
        <Box />
        </div>
    );
  }
}

export default IndexPage