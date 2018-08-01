import React from 'react'

class IndexPage extends React.Component {

  render() {
    const { transition } = this.props;

    return (
      <div style={transition && transition.style}>
      </div>
    );
  }
}

export default IndexPage
