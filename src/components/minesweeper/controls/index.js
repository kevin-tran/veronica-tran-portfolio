import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import styles from './index.module.scss';

class Controls extends Component {
  render() {
    const {
      minesLeft,
      onReset,
      timeSpent
    } = this.props;

    return (
      <div className={styles.relativeContainer}>
        <div className={styles.mineContainer}>
          {minesLeft}
        </div>
        <div className={styles.resetButton}
          onClick={onReset}> :)</div>
        <div className={styles.timeContainer}>
          {timeSpent}
        </div>
      </div>
    );
  }
}

Controls.defaultProps = {
  onReset() { },
  minesLeft: 0,
  isGameOver: false,
  isTicking: false,
  hasWon: false,
  timeSpent: 0
};

Controls.propTypes = {
  onReset: PropTypes.func,
  minesLeft: PropTypes.number,
  hasWon: PropTypes.bool,
  isTicking: PropTypes.bool,
  isGameOver: PropTypes.bool,
  timeSpent: PropTypes.number
};

export default Controls;
