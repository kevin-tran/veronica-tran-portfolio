import React from 'react'
import { Rnd } from 'react-rnd'
import { Consumer } from '../../state/context/createContext'

import styles from './index.module.scss'

const Box = () => (
    <Consumer>
        {({ activeWindow, setActiveWindow }) => (
            <Rnd
            default={{
                x: 600,
                y: 400,
                width: 400,
                height: 300,
            }}
            minWidth={150}
            minHeight={150}
            lockAspectRatio
            bounds='window'
            onDragStart={() => setActiveWindow('Box')}
            className={styles.rndOverlay}
            >
            <div className={activeWindow === 'Box' ? styles.boxActive : styles.box}>
            <div className={styles.boxEdge} style={{ left: '-.4em', top: '-.4em' }} />
            <div className={styles.boxEdge} style={{ right: '-.4em', top: '-.4em' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.4em', left: '-.4em' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.4em', right: '-.4em' }} />

            <div className={styles.boxEdge} style={{ top: '-.4em', right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }} />
            <div className={styles.boxEdge} style={{ bottom: '-.4em', right: 0, left: 0, marginRight: 'auto', marginLeft: 'auto' }} />
            <div className={styles.boxEdge} style={{ left: '-.4em', top: '46%' }} />
            <div className={styles.boxEdge} style={{ right: '-.4em', top: '46%' }} />
            </div>
            </Rnd>
        )}
    </Consumer>
)

export default Box