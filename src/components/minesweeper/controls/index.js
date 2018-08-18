import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
          0{minesLeft}
        </div>
        <div className={styles.resetButton}
          onClick={onReset}>
          <svg width='1.3em' height='1.3em' viewBox='0 0 12 7'>
            <path d="M8.15653352.63378894h1.23991935v1.23991935H8.15653352V.63378894zm-5.18346774 0h1.23991935v1.23991935H2.97306578V.63378894zM.36621094 4.48661152v-.78024194c1.93549355 1.20565119 3.87297417 1.80846774 5.8125 1.80846774.7580683 0 1.51007691-.08669268 2.25604838-.26008064.60484174-.13709746 1.1854811-.3286278 1.74193549-.57459677.36290504-.15725886.9677377-.48185238 1.81451613-.97379033v.78024194c-1.01210184.7580683-2.0282207 1.31854657-3.0483871 1.68145161-.87903665.31048542-1.7983823.46572581-2.75806452.46572581-1.08871512 0-2.14112395-.20866727-3.15725806-.62600807C2.01136715 5.59044008 1.12427924 5.0833887.36621094 4.48661152z" fill="#222" fillRule="evenodd" />
          </svg>
        </div>
        <div className={styles.timeContainer}>
          {timeSpent < 10 && '0'}
          {timeSpent < 100 && '0'}
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
