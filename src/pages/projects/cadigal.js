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
                <b>Cadigal</b>
              </p>
              <p className={styles.subtitle}>UI/UX</p>
              <p className={styles.subtitle}>AGENCY: LIQUID</p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Luxurious hotel booking experience</b>
              </p>
              <p>
                Design of Sydney based office leasing specialists that
                highlights a modern, edgy, and premium aesthetic.
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
          fluid={data.galleryImage5.childImageSharp.fluid}
          className={styles.placeholder}
        />

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/material-driven-design">
            <div className={styles.thumbnailItem}>
              <p>Material Driven Design</p>
              <Img
                fluid={data.thumbnailPrev.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>

          <Link to="/projects/read-write-publication">
            <p>READ-WRITE Publication</p>
            <div className={styles.thumbnailItem}>
              <div style={{ width: '100%', paddingBottom: '56.25%' }} />
              <img
                src={data.thumbnailNext.publicURL}
                className={styles.imageThumb}
                alt="carazo thumbnail"
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
    galleryImage1: file(relativePath: { eq: "cadi/cadi-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "cadi/cadi-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(relativePath: { eq: "cadi/cadi-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage5: file(relativePath: { eq: "cadi/cadi-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/material-driven-design-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/read-write-publication-feature.gif" }
    ) {
      publicURL
    }
  }
`
