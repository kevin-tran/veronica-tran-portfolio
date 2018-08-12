import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import bombImage from './images/bomb.svg';
import flagImage from './images/flag.svg';
import styles from './index.module.scss'

class Cell extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(event) {
    !this.props.isOpened && this.props.onFocus(event);
  }

  render() {
    const {
      hasFlag,
      isOpened,
      hasMine,
      isGameOver,
      neighborMineCount
    } = this.props;

    const className = classNames({
      [styles.cell]: true,
      [styles.cellOpened]: isOpened,
      [styles.cellClosed]: !isOpened,
      [styles.cellExploded]: isOpened && hasMine,
      [styles.bomb]: isGameOver && hasMine && !isOpened,
      [styles[`cell${neighborMineCount}`]]: isOpened && !hasMine && neighborMineCount > 0
    });

    return (
      <div
        className={className}
        onBlur={this.props.onBlur}
        onFocus={this.handleFocus}
        onClick={this.props.onClick}
        onMouseUp={this.props.onBlur}
        onContextMenu={this.props.onFlag} />
    );
  }
}

Cell.defaultProps = {
  hasFlag: false,
  hasMine: false,
  isOpened: false,
  neighborMineCount: 0,
  onBlur() {},
  onFocus() {},
  onClick() {},
  onFlag() {}
};

Cell.propTypes = {
  hasFlag: PropTypes.bool,
  hasMine: PropTypes.bool,
  isOpened: PropTypes.bool,
  neighborMineCount: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  onFlag: PropTypes.func
};

export default Cell;
