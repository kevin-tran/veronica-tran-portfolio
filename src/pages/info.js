import React from 'react'

import styles from './info.module.scss'

const InfoPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <div className={styles.infoContainer}>
    <p>I craft compelling design solutions, rooted in conceptual ideas combined with distilled aesthetics. I work across digital, publications, exhibitions, identities, typefaces and more.</p>
    <p>I'm interested in the intersections of art, design, media, popular culture and technology.</p>
    </div>
  </div>
)

export default InfoPage
