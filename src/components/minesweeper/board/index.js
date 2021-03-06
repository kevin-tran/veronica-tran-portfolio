import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boardActionCreators from '../../../state/actions/board';
import Board from '../boardComponent';

class BoardContainer extends Component {
  render() {
    return <Board {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    board: state.get('board'),
    hasWon: state.get('hasWon'),
    mineCount: state.get('mineCount'),
    minesLeft: state.get('minesLeft'),
    isGameOver: state.get('isGameOver'),
    difficulty: state.get('difficulty'),
    windowOpen: state.get('windowOpen')
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
