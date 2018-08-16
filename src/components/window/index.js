import React from 'react'
import { Rnd } from 'react-rnd';

const WindowSVG = () => (
    <Rnd
    default={{
        x: -350,
        y: 200,
        width: 474,
        height: 581,
      }}
      minWidth={200}
      minHeight={200}
      bounds='window'>
    <svg role='presentation' viewBox='0 0 474 581' preserveAspectRatio='none' height='100%' width='100%'>
        <defs>
            <path id='a' d='M0 0h474v40H0z' />
            <path id='b' d='M0 39h474v542H0z' />
        </defs>
        <g fill='none' fillRule='evenodd'>
            <use fill='#FFF' xlinkHref='#a' />
            <path stroke='#000' d='M.5.5h473v39H.5z' />
            <use fill='#FFF' xlinkHref='#b' />
            <path stroke='#000' d='M.5 39.5h473v541H.5z' />
            <path d='M1.5 40.5l472 540M473.5 40.5l-472 540' stroke='#000' strokeLinecap='square' />
        </g>
    </svg>
    </Rnd>
)

export default WindowSVG