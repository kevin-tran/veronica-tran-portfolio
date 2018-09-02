import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Button from '../button'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Consumer } from '../../state/context/createContext';
import * as appActionCreators from '../../state/actions/app';

import styles from './index.module.scss'

class Nav extends React.Component {
    state = {
        scrollDirection: 'down',
        hasScrolled: false
    }

    constructor(props) {
        super(props);

        this.scrollPos = (typeof window !== 'undefined' && window.pageYOffset) || 0;

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClose(windowOpen) {
        this.props.appActions.toggleWindow(windowOpen);
    }

    handleScroll() {
        if (!this.state.hasScrolled) this.setState({ hasScrolled: true });

        const nextScrollPos = window.pageYOffset;
        const scrollPos = this.scrollPos;

        if (nextScrollPos > scrollPos) {
            if (this.state.scrollDirection === 'up') this.setState({ scrollDirection: 'down' });
        }

        if (nextScrollPos < scrollPos) {
            if (this.state.scrollDirection === 'down') this.setState({ scrollDirection: 'up' });
        }

        this.scrollPos = nextScrollPos;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            capture: true,
            passive: true
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { scrollDirection, hasScrolled } = this.state;
        const { newGame } = this.props.appActions;

        return (
            <Consumer>
                {({ setActiveWindow }) => (
                    <Fragment>
                        <nav className={`${styles.verticalNav} ${hasScrolled && scrollDirection === 'down' ? styles.navTopHidden : styles.navTopActive}`}>
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
                        <nav className={`${styles.verticalNavBottom} ${hasScrolled && scrollDirection === 'down' ? styles.navBottomHidden : styles.navBottomActive}`}>
                            <div className={styles.bottomRight}>
                                <Button link='mailto:nveronicatran@gmail.com' className={styles.hideMobile}>nveronicatran@gmail.com</Button>
                                <Link to='/fun' activeClassName={styles.activeLink} className={styles.showMobile}>Fun</Link>
                            </div>

                            <div className={styles.hideMobile}>
                                <svg className={styles.icon} onClick={() => { this.handleClose(true); setActiveWindow('minesweeper'); newGame(); }} viewBox="0 0 24 24">
                                    <g>
                                    <path d="M10.2865819 18.0619353l-1.74128303 2.1543473-.5337001-2.6818489c-.46442466-.1838949-.90728202-.4105024-1.32372694-.6749771l-2.48963276 1.075313.75685603-2.5654209c-.3420085-.392816-.64586241-.8197265-.90578815-1.2749579l-2.63992623-.19998 1.81932101-1.8754582c-.12457387-.5227471-.19724775-1.0656237-.21227436-1.6228826L.81761767 9.02080358l2.44051573-.80136991c.1408168-.5524089.33978981-1.08157366.59001448-1.58058973L2.55851571 4.43043273l2.51774725.42196565c.38216085-.41915499.8087975-.79705449 1.27244711-1.12623564l-.11545401-2.55126588L8.27446362 2.7246204c.52088671-.18499241 1.06690133-.31693543 1.63154533-.38933052L11 0l1.1049067 2.35859107c.5433765.0815212 1.0686633.21832587 1.5699515.40450517l2.0918857-1.58819938-.1204479 2.66161931c.4135736.30858306.7959466.65666616 1.1415303 1.03866038l2.653658-.44474382-1.3748935 2.35441561c.2087701.43870795.3783244.89968135.5041308 1.37838802l2.6116607.85756722-2.3587288 1.47528932c-.0187828.4761223-.0796599.9414265-.1790127 1.3922941l1.9459785 2.0060238-2.8036193.2123801c-.2284198.3983771-.4905166.7749762-.7824078 1.1259149l.7971687 2.7020638-2.5832332-1.1157406c-.3837657.2488443-.7904641.4653234-1.2162293.6455712l-.5475973 2.7516824-1.7517647-2.1673154c-.2570012.0252018-.5176119.0381012-.7812354.0381012-.213794 0-.4256064-.0084838-.6351191-.0251331z" fill="#000" fillRule="evenodd" />
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
