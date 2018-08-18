import React from 'react'
import { Rnd } from 'react-rnd'
import { Consumer } from '../../state/context/createContext'

import styles from './index.module.scss'

const WindowSVG = () => (
    <Consumer>
        {({ activeWindow, setActiveWindow }) => (
            <Rnd
                default={{
                    x: -350,
                    y: 200,
                    width: 480,
                    height: 580,
                }}
                minWidth={100}
                minHeight={200}
                lockAspectRatio
                bounds='window'
                onDragStart={() => setActiveWindow('Window')}
                className={activeWindow === 'Window' ? styles.containerActive : ''}
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