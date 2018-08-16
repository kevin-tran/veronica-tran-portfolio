import React from 'react'
import { Rnd } from 'react-rnd';

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
    <svg role='presentation' viewBox='0 0 493 505' preserveAspectRatio='none' height='100%' width='100%'>
    <g stroke='#000' fill='none' fillRule='evenodd'>
        <path d='M6.5 6.5h480v492H6.5z'/>
        <path fill='#000' d='M242 1h10v10h-10zM482 1h10v10h-10zM237 494h10v10h-10zM480 494h10v10h-10zM1 1h10v10H1zM1 238h10v10H1zM482 238h10v10h-10zM1 494h10v10H1z'/>
    </g>
    </svg>
    </Rnd>
)

export default Box