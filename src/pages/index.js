import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActionCreators from '../state/actions/app';

import Keyboard from '../components/keyboard'
import WindowSVG from '../components/window'
import Box from '../components/box'

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.appActions.toggleWindow(true);
  }

  componentWillUnmount() {
    this.props.appActions.toggleWindow(false);
  }

  render() {
    return (
      <Fragment>
        <Keyboard />
        <WindowSVG />
        <Box />
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(IndexPage);