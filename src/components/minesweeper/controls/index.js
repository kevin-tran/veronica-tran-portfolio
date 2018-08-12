import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import Settings from '../settings';

import styles from './index.module.scss';

class Controls extends Component {
  render() {
    const {
      minesLeft,
      isOpening,
      isTicking,
      isGameOver,
      onReset,
      hasWon,
      timeSpent
    } = this.props;

    const mineDigits = minesLeft.toString().split('');
    const timeDigits = timeSpent.toString().split('');

    return (
    <div className={styles.controlsPadding}>
      <div className={styles.controlsContainer}>
      <div className={styles.relativeContainer}>
        <div className={styles.mineContainer}>
        {mineDigits.length === 1 && 
        <Fragment>
        <div className={styles.number0} />
        <div className={styles.number0} />
        </Fragment>
        }

        {mineDigits.length === 2 && 
        <div className={styles.number0} />
        }
        {mineDigits.map((digit, index) => (
            <div key={index} className={styles[`number${digit}`]} />
        ))}
        </div>
        <div className={styles.resetButton}
          onClick={onReset} />
        <div className={styles.timeContainer}>
        {timeDigits.length === 1 && 
        <Fragment>
        <div className={styles.number0} />
        <div className={styles.number0} />
        </Fragment>
        }

        {timeDigits.length === 2 && 
        <div className={styles.number0} />
        }
        {timeDigits.map((digit, index) => (
            <div key={index} className={styles[`number${digit}`]} />
        ))}
        </div>
      </div>
      </div>
      </div>
    );
  }
}

Controls.defaultProps = {
  onReset() {},
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
