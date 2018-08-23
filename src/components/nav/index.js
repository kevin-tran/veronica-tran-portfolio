import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Button from '../button'

import styles from './index.module.scss'

class Nav extends React.Component {
    render() {
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
                    <Button link='mailto:nveronicatran@gmail.com' className={styles.hideMobile}>nveronicatran@gmail.com</Button>
                    <Link to='/fun' activeClassName={styles.activeLink}>Fun</Link>
                </div>

                <div className={styles.bottomRight}>
                    <Link to='/projects' activeClassName={styles.activeLink}>Projects</Link>
                </div>

                <div className={styles.mobileNav}>
                    <Button link='/'>Veronica Tran</Button>
                    <Link to='/info' activeClassName={styles.activeLink}>Info</Link>
                </div>
            </Fragment>
        );
    }
}

export default Nav