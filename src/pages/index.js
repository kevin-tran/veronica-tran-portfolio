import React from 'react'
import Sphere from '../components/sphere'

class IndexPage extends React.Component {

  render() {
    const { transition } = this.props;

    return (
      <div style={transition && transition.style}>
        <Sphere />
      </div>
    );
  }
}

export default IndexPage
