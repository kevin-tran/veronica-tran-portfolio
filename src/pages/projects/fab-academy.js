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
    console.log(data)

    return (
      <div className={styles.container}>
        <div>
          <section className={styles.headerContainer}>
            <div className={styles.contentContainer}>
              <p>
                <b>Fab Academy</b>
              </p>
              <p className={styles.subtitle}>LOTS OF MAKING</p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Digital fabrication, electronics, and rapid prototyping</b>
              </p>
              <p>
                The Fab Academy is a fast paced, hands-on learning experience
                where students learn rapid-prototyping by planning and executing
                a new project each week, resulting in a personal portfolio of
                technical accomplishments. It offers a distributed rather than
                distance educational model, students learn in local workgroups,
                with peers, mentors, and machines, which are then connected
                globally by content sharing and video for interactive classes.
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

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/skagen">
            <p>Skagen</p>
            <div className={styles.thumbnailItem}>
              <div style={{ width: '100%', paddingBottom: '56.25%' }} />
              <img
                src={data.thumbnailPrev.publicURL}
                className={styles.imageThumb}
                alt="skagen thumbnail"
              />
            </div>
          </Link>

          <Link to="/projects/material-driven-design">
            <div className={styles.thumbnailItem}>
              <p>Material Driven Design</p>
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
    galleryImage1: file(relativePath: { eq: "fa/fa-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "fa/fa-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(relativePath: { eq: "thumbnails/skagen-feature.gif" }) {
      publicURL
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/material-driven-design-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
