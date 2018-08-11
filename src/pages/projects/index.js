import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const ProjectsPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <div className={styles.projectContainer}>
      <div className={styles.projectCard}>
      </div>
      <div className={styles.projectCard}>
      </div>
      <div className={styles.projectCard}>
      </div>
      <div className={styles.projectCard}>
      </div>
      </div>
  </div>
)

export default ProjectsPage
