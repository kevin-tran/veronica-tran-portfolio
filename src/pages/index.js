import React from 'react'
import Minesweeper from '../components/minesweeper'

class IndexPage extends React.Component {

  render() {
    const { transition } = this.props;

    return (
      <div style={transition && transition.style}>
      <Minesweeper />
      </div>
    );
  }
}

export default IndexPage
