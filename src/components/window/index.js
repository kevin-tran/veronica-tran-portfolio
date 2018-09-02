import React from 'react'
import { Rnd } from 'react-rnd'
import { Consumer } from '../../state/context/createContext'

import styles from './index.module.scss'

const WindowSVG = () => (
    <Consumer>
        {({ windowOrder, setActiveWindow }) => (
            <Rnd
                default={{
                    x: 550,
                    y: 150,
                    width: 300,
                    height: 400,
                }}
                minWidth={100}
                minHeight={200}
                lockAspectRatio
                bounds='window'
                onDragStart={() => setActiveWindow('window')}
                className={styles.rndOverlay}
                style={{ zIndex: `100${windowOrder.indexOf('window')}` }}
            >
                <svg className={styles.container}>
                    <line x1='0' y1='2em' x2='100%' y2='2em'
                        style={{ stroke: '#000', strokeWidth: 1 }} />
                    <line x1='0' y1='100%' x2='100%' y2='2em'
                        style={{ stroke: '#000', strokeWidth: 1 }} />
                    <line x1='100%' y1='100%' x2='0' y2='2em'
                        style={{ stroke: '#000', strokeWidth: 1 }} />
                </svg>
            </Rnd>
        )}
    </Consumer>
)

export default WindowSVG