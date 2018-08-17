import React from 'react'
import { Rnd } from 'react-rnd';

const WindowSVG = () => (
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
        bounds='window'>
        <svg style={{ width: '100%', height: '100%', border: '1px solid #000' }}>
            <line x1='0' y1='2em' x2='100%' y2='2em'
                style={{ stroke: '#000', strokeWidth: 1 }} />
            <line x1='0' y1='100%' x2='100%' y2='2em'
                style={{ stroke: '#000', strokeWidth: 1 }} />
            <line x1='100%' y1='100%' x2='0' y2='2em'
                style={{ stroke: '#000', strokeWidth: 1 }} />
        </svg>
    </Rnd>
)

export default WindowSVG