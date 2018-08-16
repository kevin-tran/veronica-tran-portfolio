import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Button from '../button'

import styles from './index.module.scss'

class Nav extends React.Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {

        const { open } = this.state;

        return (
            <Fragment>
                <nav className={styles.nav}>
                    <div className={styles.topLeft}>
                        <Button link='/'>Veronica Tran</Button>
                    </div>

                    <div className={styles.socialLinks}>
                        <p>Graphic + Digital Designer</p>
                        <Fragment>
                            <div className={styles.socialPadding}>
                                <Button link='https://www.instagram.com/nveronicatran' target='_blank' rel='noopener'>Instagram</Button>
                            </div>
                            <div className={styles.socialPadding}>
                                <Button link='https://www.linkedin.com/in/veronica-tran' target='_blank' rel='noopener'>LinkedIn</Button>
                            </div>
                            <div className={styles.socialPadding}>
                                <Button link='https://dribbble.com/veronicatran' target='_blank' rel='noopener'>Dribbble</Button>
                            </div>
                        </Fragment>
                    </div>
                </nav>
                <div className={styles.bottomRight}>
                    <Button link='mailto:nveronicatran@gmail.com'>nveronicatran@gmail.com</Button>
                </div>

                <div className={styles.topRight}>
                    <Link to='/info' activeClassName={styles.activeLink}>Info</Link>
                </div>

                <div className={styles.navLinks}>
                    <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                    <Link to='/fun' activeClassName={styles.activeLink}>Fun</Link>
                </div>

                <div className={styles.mobileNav} onClick={this.handleClick}>
                    <Button>Menu</Button>
                </div>

                <div className={open ? styles.mobileNavItemsOpen : styles.mobileNavItems}>
                    <Link to='/info' activeClassName={styles.activeLink}>Info</Link>
                    <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                    <Link to='/fun' activeClassName={styles.activeLink}>Fun</Link>
                </div>
            </Fragment>
        );
    }
}

export default Nav