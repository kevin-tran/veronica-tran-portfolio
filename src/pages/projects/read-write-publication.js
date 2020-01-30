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
                <b>READ-WRITE Publication</b>
              </p>
              <p className={styles.subtitle}>
                EDITORIAL, PUBLICATION, TYPOGRAPHY
              </p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Documenting Hangar's 4th call for Research / Development</b>
              </p>
              <p>
                This publication documents the results and processes of
                READ-WRITE. READ-WRITE is an installation developed as part of
                HANGAR’s 4th Research and Development Grant in the Interaction
                Lab based in Barcelona, Spain. It explores the ideas within the
                materiality of digital memory.
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

        <div className={styles.imageContainer}>
          <div style={{ width: '100%', paddingBottom: '56.25%' }} />
          <img
            src={data.galleryImage5.publicURL}
            className={styles.placeholder}
          />
        </div>

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/cadigal">
            <div className={styles.thumbnailItem}>
              <p>Cadigal</p>
              <Img
                fluid={data.thumbnailPrev.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>

          <Link to="/projects/read-write-installation">
            <div className={styles.thumbnailItem}>
              <p>READ-WRITE Installation</p>
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
    galleryImage1: file(
      relativePath: {
        eq: "read-write-publication/read-write-publication-1.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(
      relativePath: {
        eq: "read-write-publication/read-write-publication-2.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(
      relativePath: {
        eq: "read-write-publication/read-write-publication-3.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(
      relativePath: {
        eq: "read-write-publication/read-write-publication-4.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage5: file(
      relativePath: {
        eq: "read-write-publication/read-write-publication-5.gif"
      }
    ) {
      publicURL
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/cadigal-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/read-write-installation-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
