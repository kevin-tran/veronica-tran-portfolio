import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Button from '../button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Consumer } from '../../state/context/createContext'
import Throttle from '../../utils/throttle';
import * as appActionCreators from '../../state/actions/app';

import styles from './index.module.scss'

class Nav extends React.Component {
    state = {
        scrollDirection: 'down',
        scrollPos: 0
    }

    handleClose(windowOpen) {
        this.props.appActions.toggleWindow(windowOpen);
    }

    handleScroll = Throttle(() => {
        this.setState({ scrollPos: window.pageYOffset, scrollDirection: window.pageYOffset < this.state.scrollPos ? 'up' : 'down' });
    }, 50);

    componentDidMount() {
        this.handleScroll();

        window.addEventListener('scroll', this.handleScroll, {
            capture: true,
            passive: true
          });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        const { scrollPos, scrollDirection } = this.state;
        const { newGame } = this.props.appActions;

        return (
            <Consumer>
                {({ setActiveWindow }) => (
                    <Fragment>
                        <nav className={`${styles.verticalNav} ${scrollPos > 0 && scrollDirection === 'down' ? styles.navTopHidden : styles.navTopActive}`}>
                            <div className={`${styles.navLinks} ${styles.hideMobile}`}>
                                <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                                <Link to='/fun' activeClassName={styles.activeLink}>Fun</Link>
                            </div>

                            <div className={styles.topLeft}>
                                <Button link='/'>Veronica Tran</Button>
                            </div>
                            <div className={styles.topRight}>
                            <Link to='/info' activeClassName={styles.activeLink}>Info</Link>
                            </div>
                        </nav>
                        <nav className={`${styles.verticalNavBottom} ${scrollPos > 0 && scrollDirection === 'down' ? styles.navBottomHidden : styles.navBottomActive}`}>
                            <div className={styles.bottomRight}>
                                <Button link='mailto:nveronicatran@gmail.com' className={styles.hideMobile}>nveronicatran@gmail.com</Button>
                                <Link to='/fun' activeClassName={styles.activeLink} className={styles.showMobile}>Fun</Link>
                            </div>

                            <div className={styles.hideMobile}>
                                <svg className={styles.icon} onClick={() => { this.handleClose(true); setActiveWindow('minesweeper'); newGame(); }} viewBox="0 0 24 24">
                                <g>
                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                </g>
                            </svg>
                            </div>

                            <div className={`${styles.bottomLeft} ${styles.showMobile}`}>
                                <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                            </div>
                        </nav>
                    </Fragment>
                )}
            </Consumer>
        );
    }
}

function mapStateToProps(state) {
    return {
        windowOpen: state.get('windowOpen')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
