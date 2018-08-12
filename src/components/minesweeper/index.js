import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';

import * as appActionCreators from '../../state/actions/app';

import Settings from './settings';
import BoardContainer from './board';
import Controls from './controls';

import styles from './index.module.scss';

const TASK = Symbol();

class Minesweeper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpening: false
    };

    this.tick = this.tick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCellBlur = this.handleCellBlur.bind(this);
    this.handleCellFocus = this.handleCellFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isTicking && nextProps.isTicking) {
      clearInterval(this[TASK]);
      this[TASK] = setInterval(this.tick, 1000);
    }
  }

  componentDidMount() {
    this.props.appActions.newGame();
  }

  componentWillUnmount() {
    clearInterval(this[TASK]);
  }

  handleCellFocus(_event) {
    this.setState({ isOpening: true });
  }

  handleCellBlur(_event) {
    this.setState({ isOpening: false });
  }

  handleReset() {
    if (this.props.isTicking) {
      this.props.appActions.endGame();
    }

    this.props.appActions.newGame();
  }

  tick() {
    if (!this.props.isTicking) {
      return;
    }

    this.props.appActions.incrementTime();
  }

  render() {
    const {
      isGameOver,
      isTicking,
      hasWon,
      mineCount,
      minesLeft,
      timeSpent,
      difficulty
    } = this.props;
    const { isOpening } = this.state;
    const className = classNames({
      app__is_ticking: isTicking
    });

    return (
      <Draggable>
      <div className={difficulty === 'easy' ? styles.container : difficulty === 'medium' ? styles.containerMedium : styles.containerLarge}>
      <div className={styles.containerInner}>
      <div className={styles.containerWindow}>
        <Settings
          isOpening={isOpening}
          onReset={this.handleReset}
        />
        <div className={styles.containerBoard}>
        <Controls
        hasWon={hasWon}
        isTicking={isTicking}
        mineCount={mineCount}
        minesLeft={minesLeft}
        timeSpent={timeSpent}
        onReset={this.handleReset}
      />
          <BoardContainer
            mineCount={mineCount}
            isTicking={isTicking}
            isGameOver={isGameOver}
            onMouseUp={this.handleCellBlur}
            onMouseDown={this.handleCellFocus}
          />
        </div>
        </div>
      </div>
      </div>
      </Draggable>
    );
  }
}

Minesweeper.propTypes = {
  hasWon: PropTypes.bool,
  isTicking: PropTypes.bool,
  isGameOver: PropTypes.bool,
  mineCount: PropTypes.number,
  minesLeft: PropTypes.number,
  timeSpent: PropTypes.number,
  appActions: PropTypes.object
};

function mapStateToProps(state) {
  return {

    hasWon: state.get('hasWon'),
    timeSpent: state.get('timeSpent'),
    mineCount: state.get('mineCount'),
    isTicking: state.get('isTicking'),
    minesLeft: state.get('minesLeft'),
    isGameOver: state.get('isGameOver'),
    difficulty: state.get('difficulty')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);
