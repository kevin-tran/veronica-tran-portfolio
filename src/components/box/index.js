import React from 'react'
import { Rnd } from 'react-rnd'
import { Consumer } from '../../state/context/createContext'

import styles from './index.module.scss'

const Box = () => (
    <Consumer>
        {({ activeWindow, setActiveWindow }) => (
            <Rnd
            default={{
                x: 0,
                y: 600,
                width: 493,
                height: 505,
            }}
            minWidth={150}
            minHeight={150}
            lockAspectRatio
            bounds='window'
            onDragStart={() => setActiveWindow('Box')}
            >
            <div className={activeWindow === 'Box' ? styles.boxActive : styles.box}>
            <div className={styles.boxEdge} style={{ left: '-.5em', top: '-.5em' }} />
            <div className={styles.boxEdge} style={{ right: '-.5em', top: '-.5em' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.5em', left: '-.5em' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.5em', right: '-.5em' }} />

            <div className={styles.boxEdge} style={{ top: '-.5em', right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.5em', right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }} />
            <div className={styles.boxEdge} style={{ left: '-.5em', top: '46%' }} />
            <div className={styles.boxEdge} style={{ right: '-.5em', top: '46%' }} />
            </div>
            </Rnd>
        )}
    </Consumer>
)

export default Box