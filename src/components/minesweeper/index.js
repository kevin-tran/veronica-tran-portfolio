import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rnd } from 'react-rnd';
import { CSSTransition } from 'react-transition-group';
import { MediaMatches } from "react-media-match";

import * as appActionCreators from '../../state/actions/app';
import { Consumer } from '../../state/context/createContext';


import BoardContainer from './board';

import styles from './index.module.scss';

class Minesweeper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpening: false
    };

    this.handleCellBlur = this.handleCellBlur.bind(this);
    this.handleCellFocus = this.handleCellFocus.bind(this);
  }

  componentDidMount() {
    this.props.appActions.newGame();
  }

  handleCellFocus(_event) {
    this.setState({ isOpening: true });
  }

  handleCellBlur(_event) {
    this.setState({ isOpening: false });
  }

  render() {
    const {
      isGameOver,
      mineCount,
      windowOpen
    } = this.props;

    return (
      <MediaMatches>
        {matches => (
          <Consumer>
            {({ windowOrder, setActiveWindow }) => (
              <Rnd
                default={{
                  x: matches.desktop ? 120 : 40,
                  y: matches.desktop ? 200 : 120,
                }}
                minWidth={190}
                minHeight={255}
                enableResizing={false}
                bounds='window'
                className={windowOpen ? styles.rndOverlay : styles.rndOverlayClose}
                onDragStart={() => setActiveWindow('minesweeper')}
                style={{ zIndex: `100${windowOrder.indexOf('minesweeper')}` }}
                onResizeStop={() => setActiveWindow('minesweeper')}
              >
                <CSSTransition
                  in={windowOpen}
                  classNames={{
                    enterDone: styles.enterDone,
                    exit: styles.exit,
                    exitActive: styles.exitActive,
                    exitDone: styles.exitDone
                  }}
                  timeout={0}>
                  <div className={styles.container}>
                    <div className={styles.containerInner}>
                      <div className={styles.containerWindow}>
                        <div className={styles.containerBoard}>
                          <BoardContainer
                            mineCount={mineCount}
                            isGameOver={isGameOver}
                            onMouseUp={this.handleCellBlur}
                            onMouseDown={this.handleCellFocus}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              </Rnd>
            )}
          </Consumer>
        )}
      </MediaMatches>
    );
  }
}

Minesweeper.propTypes = {
  hasWon: PropTypes.bool,
  isGameOver: PropTypes.bool,
  mineCount: PropTypes.number,
  minesLeft: PropTypes.number,
  appActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
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
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);
