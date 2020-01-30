import React from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './template.module.scss'

class CadigalPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { data } = this.props

    return (
      <div className={styles.container}>
        <div>
          <section className={styles.headerContainer}>
            <div className={styles.contentContainer}>
              <p>
                <b>Material Driven Design</b>
              </p>
              <p className={styles.subtitle}>MATERIALS, CIRCULAR ECONOMY</p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Giving new life to food waste</b>
              </p>
              <p>
                Creating a 100% biodegradeable product through sourcing a local
                food waste material – pineapple leaves and fibre, working in a
                way that encourages developing a dialogue with the material
                through making. The project aims to prolong the life cycle and
                guaranteeing a reintegration into the environment through
                biodegradation. The information is available in an open source
                manner, so that the processes are replicable and democratically
                accessible.
              </p>
            </div>
          </section>
        </div>

        <Img
          fluid={data.galleryImage1.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage2.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage3.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage4.childImageSharp.fluid}
          className={styles.placeholder}
        />

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/fab-academy">
            <p>Fab Academy</p>
            <div className={styles.thumbnailItem}>
              <div style={{ width: '100%', paddingBottom: '56.25%' }} />
              <img
                src={data.thumbnailPrev.publicURL}
                className={styles.imageThumb}
                alt="carazo thumbnail"
              />
            </div>
          </Link>

          <Link to="/projects/cadigal">
            <div className={styles.thumbnailItem}>
              <p>Cadigal</p>
              <Img
                fluid={data.thumbnailNext.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default CadigalPage

export const query = graphql`
  query {
    galleryImage1: file(relativePath: { eq: "mdd/mdd-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "mdd/mdd-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(relativePath: { eq: "mdd/mdd-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(relativePath: { eq: "mdd/mdd-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/fab-academy-feature.gif" }
    ) {
      publicURL
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/cadigal-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
