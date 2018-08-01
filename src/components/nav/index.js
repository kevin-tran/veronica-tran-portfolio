import React, { Fragment } from 'react'
import Link from 'gatsby-link'
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
            <div className={styles.nav}>
                <div className={styles.topLeft}>
                    <Button link='/'><b>Veronica Tran</b></Button>
                </div>

                <div className={styles.bottomRight}>
                    <Button link='mailto:nveronicatran@gmail.com'>nveronicatran@gmail.com</Button>
                </div>

                <div className={styles.topRight}>
                    <Link to='/info'>Info</Link>
                </div>

                <div className={styles.navLinks}>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/fun'>Fun</Link>
                </div>

                <div className={styles.mobileNav}>
                    <Button>Menu</Button>
                </div>

                <div className={styles.mobileNavItems}>
                    <Link to='/info'>Info</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/fun'>Fun</Link>
                </div>

                <div className={styles.socialLinks}>
                    <p>Graphic + Digital Designer</p>
                    <Fragment>
                        <Button link='https://www.instagram.com/nveronicatran' target='_blank' rel='noopener'>Instagram</Button>
                        <Button link='https://www.linkedin.com/in/veronica-tran' target='_blank' rel='noopener'>LinkedIn</Button>
                        <Button link='https://dribbble.com/veronicatran' target='_blank' rel='noopener'>Dribbble</Button>
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default Nav