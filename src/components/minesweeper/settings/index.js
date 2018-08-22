import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActionCreators from '../../../state/actions/app';

import styles from './index.module.scss';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSettings: false
    };

    this.handleSettings = this.handleSettings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSettings(_event) {
    this.setState({
      showSettings: !this.state.showSettings
    });
  }

  handleChange(difficulty) {
    this.props.appActions.updateDifficulty(difficulty);
  }

  handleClose(windowOpen) {
    this.props.appActions.toggleWindow(windowOpen);
  }

  render() {

    return (
      <div className={styles.relative}>
        <div className={styles.titleBar}>
          Minesweeper
          <div className={styles.buttons}>
            <div onClick={() => this.handleClose(false)}>
              <svg width='.7em' height='.7em' viewBox='0 0 20 19'>
                <g stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="square">
                  <path d="M.83333333 18.1666667L18.5110029.48899714M19.16666667 18.1666667L1.4889971.48899714" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    difficulty: state.get('difficulty')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
}

Settings.defaultProps = {
  onReset() { },
  onClose() { },
  isOpening: false
};

Settings.propTypes = {
  onReset: PropTypes.func,
  isTicking: PropTypes.bool,
  isOpening: PropTypes.bool,
  difficulty: PropTypes.string,
  appActions: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
