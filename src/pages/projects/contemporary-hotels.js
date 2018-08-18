import React, { Fragment } from 'react'

import styles from './template.module.scss'

import ch1 from './images/ch/ch-1.jpg'
import ch2 from './images/ch/ch-2.jpg'
import ch4 from './images/ch/ch-4.jpg'
import ch5 from './images/ch/ch-5.jpg'
import ch6 from './images/ch/ch-6.jpg'


const ContemporaryHotelsPage = () => (
  <div className={styles.container}>
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

    <div style={{ backgroundImage: `url(${ch1})`}} className={styles.projectImage} />
  </div>
)

export default ContemporaryHotelsPage
