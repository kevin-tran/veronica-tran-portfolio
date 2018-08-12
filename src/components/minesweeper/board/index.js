import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as boardActionCreators from '../../../state/actions/board';
import Board from '../../board';

class BoardContainer extends Component {
  render() {
    return <Board {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    board: state.get('board')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    boardActions: bindActionCreators(boardActionCreators, dispatch)
  };
}

BoardContainer.propTypes = {
  boardActions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
