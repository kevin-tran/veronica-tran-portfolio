import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rnd } from 'react-rnd';

import * as appActionCreators from '../../state/actions/app';

import BoardContainer from './board';

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

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      mineCount,
      windowOpen
    } = this.props;

    return (
      <Fragment>
        {windowOpen &&
          <Rnd
            default={{
              x: 250,
              y: 200,
            }}
            minWidth={500}
            minHeight={550}
            bounds='window'
            className={styles.rndOverlay}
          >
            <div className={styles.container}>
              <div className={styles.containerInner}>
                <div className={styles.containerWindow}>
                  <div className={styles.containerBoard}>
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
          </Rnd>
        }
      </Fragment>
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
    difficulty: state.get('difficulty'),
    windowOpen: state.get('windowOpen')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);
