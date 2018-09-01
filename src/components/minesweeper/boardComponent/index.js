import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from '../cell';
import Settings from '../settings';
import Controls from '../controls'

import styles from './index.module.scss';

class BoardComponent extends Component {
  constructor(props) {
    super(props);

    this.handleCellClicked = this.handleCellClicked.bind(this);
    this.handleCellFlagged = this.handleCellFlagged.bind(this);
  }

  handleCellClicked(_event, cell) {
    this.props.boardActions.openCell(cell);
  }

  handleContextMenu(event) {
    event.preventDefault();
  }

  handleCellFlagged(event, cell) {
    event.preventDefault();

    this.props.boardActions.flagCell(cell);
  }

  render() {
    const {
      hasWon,
      mineCount,
      minesLeft,
      isOpening 
    } = this.props;

    return (
      <div onContextMenu={this.handleContextMenu} className={styles.boardContainer}>
        <Settings
          isOpening={isOpening}
          onReset={this.handleReset}
        />
        <Controls
          hasWon={hasWon}
          mineCount={mineCount}
          minesLeft={minesLeft}
          onReset={this.handleReset}
        />

        <div className={styles.cellContainer}>
        {this.props.board &&
          this.props.board.map((row, idx) => (
            <div key={idx} className={styles.cellRow}>
              {row.map((cell, idx) => {
                return (
                  <Cell
                    key={idx}
                    hasMine={cell.get('hasMine')}
                    hasFlag={cell.get('hasFlag')}
                    isOpened={cell.get('isOpened')}
                    neighborMineCount={cell.get('neighborMineCount')}
                    onBlur={this.props.onMouseUp}
                    onFocus={this.props.onMouseDown}
                    isGameOver={this.props.isGameOver}
                    onFlag={e => this.handleCellFlagged(e, cell)}
                    onClick={e => this.handleCellClicked(e, cell)}
                  />
                );
              })}
            </div>
          ))}
          </div>
      </div>
    );
  }
}

BoardComponent.defaultProps = {
  onMouseDown() { },
  onMouseUp() { },
  isGameOver: false,
  mineCount: 10,
  columns: 9,
  rows: 9
};

BoardComponent.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  mineCount: PropTypes.number,
  hasWon: PropTypes.bool,
  isGameOver: PropTypes.bool,
  onMouseUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  className: PropTypes.string
};

export default BoardComponent;
