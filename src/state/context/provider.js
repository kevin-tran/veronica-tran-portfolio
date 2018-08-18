import React, { Component } from 'react';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    windowOrder: [],
    setActiveWindow: this.setActiveWindow.bind(this),
  };

  setActiveWindow(windowKey) {
    // if (this.state.windowOrder[windowKey]) {
    //   if (this.state.windowOrder.length === 1) return;

    //   const restOfKeys = this.state.windowOrder.filter(key => key !== windowKey);
    //   restOfKeys.unshift(windowKey);

    //   this.setState({ windowOrder: restOfKeys });
    // }

    // else {
    //   this.setState({ windowOrder: [ ...this.state.windowOrder, windowKey]});
    // }

    if (this.state.windowOrder.length === 0) {
      this.setState({ windowOrder:[...this.state.windowOrder, windowKey]});
      console.log(this.state.windowOrder);
      return;
    }

    console.log(this.state.windowOrder.indexOf(windowKey) >= 0);
    if(this.state.windowOrder.indexOf(windowKey) >= 0) {
      this.setState({ windowOrder: [windowKey, ...this.state.windowOrder]});
      console.log(this.state.windowOrder);
      return;
    } else {
          const restOfKeys = this.state.windowOrder.filter(key => console.log(key));
          console.log(restOfKeys);

          this.setState({ windowOrder: [windowKey, ...restOfKeys] });
          console.log(this.state.windowOrder);
    }

  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;