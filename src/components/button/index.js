import React from 'react'
import styles from './index.module.scss'

const Button = ({ link, children, ...rest}) => (
    <a href={link} className={styles.button} {...rest}>{children}</a>
)

export default Button