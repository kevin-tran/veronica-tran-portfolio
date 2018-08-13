import React from 'react'
import Layout from '../../components/layout'

import styles from './index.module.scss'

import chThumbnail from './images/thumbnails/ch-feature-thumbnail.jpg'
import odysseyThumbnail from './images/thumbnails/odyssey-feature-thumbnail.png'
import isoThumbnail from './images/thumbnails/iso-feature-thumbnail.png'
import caThumbnail from './images/thumbnails/ca-feature-thumbnail.jpg'
import fcThumbnail from './images/thumbnails/fc-feature-thumbnail.png'
import meshThumbnail from './images/thumbnails/mesh-feature-thumbnail.png'
import unboundThumbnail from './images/thumbnails/unbound-feature-thumbnail.png'
import driftThumbnail from './images/thumbnails/drift-feature-thumbnail.png'
import skaThumbnail from './images/thumbnails/ska-feature-thumbnail.png'
import wikifragsThumbnail from './images/thumbnails/wikifrags-feature-thumbnail.png'
import cadThumbnail from './images/thumbnails/cad-feature-thumbnail.png'

const ProjectsPage = () => (
  <Layout>
    <div className={styles.projectContainer}>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${chThumbnail})`}}>
      </div>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${odysseyThumbnail})`}}>
      </div>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${isoThumbnail})`}}>
      </div>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${caThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${fcThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${meshThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${unboundThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${driftThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${skaThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${wikifragsThumbnail})`}}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${cadThumbnail})`}}>
      </div>
      </div>
  </Layout>
)

export default ProjectsPage
