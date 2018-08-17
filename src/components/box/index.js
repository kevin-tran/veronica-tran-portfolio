import React from 'react'
import { Rnd } from 'react-rnd'

import styles from './index.module.scss'

const Box = () => (
    <Rnd
    default={{
        x: 0,
        y: 600,
        width: 493,
        height: 505,
      }}
      lockAspectRatio
      bounds='window'>
    <div className={styles.box}>
    <div className={styles.boxEdge} style={{ left: '-.5em', top: '-.5em' }} />
    <div className={styles.boxEdge} style={{ right: '-.5em', top: '-.5em' }} />
    <div className={styles.boxEdge} style={{ bottom: '-.5em', left: '-.5em' }} />
    <div className={styles.boxEdge} style={{ bottom: '-.5em', right: '-.5em' }} />

    <div className={styles.boxEdge} style={{ top: '-.5em', left: '50%' }} />
    <div className={styles.boxEdge} style={{ bottom: '-.5em', right: '50%' }} />
    <div className={styles.boxEdge} style={{ left: '-.5em', top: '50%' }} />
    <div className={styles.boxEdge} style={{ right: '-.5em', top: '50%' }} />
    </div>
    </Rnd>
)

export default Box