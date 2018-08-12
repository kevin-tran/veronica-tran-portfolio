import React from 'react'

import styles from './template.module.scss'

const ContemporaryHotelsPage = ({ transition }) => (
  <div style={transition && transition.style}>
  <div className={styles.headerContainer}>
    <div>
      <p><b>Contemporary Hotels</b></p>
      <p>Project Subheading</p>
      </div>

      <div className={styles.contentContainer}>
        <p>UX, UI, ILLUSTRATION, MOTION</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className={styles.contentContainer}>
        <p>AGENCY: LIQUID</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
  </div>
)

export default ContemporaryHotelsPage
