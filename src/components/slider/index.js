import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class ScrollingHorizontally extends Component {
    render() {
      const child   = { width: `30em`, height: `100%`, backgroundColor: '#eee', flex: '0 0 auto'}
      const parent  = { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto'}
      return (
        <div style={parent}>
              <div style={child}>1</div>
              <div style={child}>2</div>
              <div style={child}>3</div>
              <div style={child}>4</div>
              <div style={child}>5</div>
              <div style={child}>6</div>
              <div style={child}>7</div>
        </div>
      )
    }
  }

export default ScrollingHorizontally