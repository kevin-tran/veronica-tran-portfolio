import React, { Component } from 'react';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    windowOrder: [],
    setActiveWindow: this.setActiveWindow.bind(this),
  };

  setActiveWindow(windowKey) {
    if (this.state.windowOrder.indexOf(windowKey) === -1) {
      this.setState({ windowOrder:[...this.state.windowOrder, windowKey]});
      return;
    }

    this.setState({ windowOrder: [...this.state.windowOrder.filter(key => key !== windowKey), windowKey]});
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;