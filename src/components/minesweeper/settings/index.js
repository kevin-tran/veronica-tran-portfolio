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
  }

  handleSettings(_event) {
    this.setState({
      showSettings: !this.state.showSettings
    });
  }

  handleChange(difficulty) {
    this.props.appActions.updateDifficulty(difficulty);
  }

  render() {
    const {
      isOpening,
      onReset,
    } = this.props;

    return (
      <div className={styles.relative}>
      <div className={styles.titleBar}>
      <div className={styles.closeButton} />
      </div>
          <p
            className={styles.settingsButton}
            onClick={this.handleSettings}>
            Game
          </p>
        {this.state.showSettings &&
          <ul className={styles.settings}>
          <li onClick={() => { onReset(); this.setState({ showSettings: false });}}>New</li>
          <li className={styles.menuDivider} />
              <li onClick={() => { this.handleChange('easy'); this.setState({ showSettings: false });}}>Beginner</li>
              <li onClick={() => { this.handleChange('medium'); this.setState({ showSettings: false });}}>Intermediate</li>
              <li onClick={() => { this.handleChange('hard'); this.setState({ showSettings: false });}}>Expert</li>
          </ul>
        }
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
  onReset() {},
  onClose() {},
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
