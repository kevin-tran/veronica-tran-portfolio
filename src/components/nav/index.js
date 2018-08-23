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

                <nav className={styles.verticalNav}>
                    <Fragment>
                        <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                        <Link to='/fun' activeClassName={styles.activeLink}>Fun</Link>
                    </Fragment>

                    <div className={styles.topLeft}>
                        <Button link='/'>Veronica Tran</Button>
                    </div>

                    <Link to='/info' activeClassName={styles.activeLink}>Info</Link>
                </nav>
                <div className={styles.bottomLeft}>
                    <Button link='mailto:nveronicatran@gmail.com'>nveronicatran@gmail.com</Button>
                </div>

                <div className={styles.mobileNav}>
                    <Button link='/'>Veronica Tran</Button>
                    <Button onClick={this.handleClick}>Menu</Button>
                </div>

                <div className={open ? styles.mobileNavItemsOpen : styles.mobileNavItems}>
                    <Link to='/projects' activeClassName={styles.activeLink} onClick={this.handleClick}>Projects</Link>
                    <Link to='/fun' activeClassName={styles.activeLink} onClick={this.handleClick}>Fun</Link>
                    <Link to='/info' activeClassName={styles.activeLink} onClick={this.handleClick}>Info</Link>
                </div>
            </Fragment>
        );
    }
}

export default Nav