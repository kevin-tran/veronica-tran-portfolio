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
                <b>Sonar +D MuseIn</b>
              </p>
              <p className={styles.subtitle}>UI/UX, BUSINESS STRATEGY</p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Designing the future of music streaming services</b>
              </p>
              <p>
                Completed at the Sonar +D Innovation Challenge in collaboration
                with Universal Music, MuseIn is a concept for the future of
                digital music streaming that highlights transparent practices
                and collaborative listening experiences. It proposes a strategy
                for individual music passports and experiential music rooms.
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
        <Img
          fluid={data.galleryImage5.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage6.childImageSharp.fluid}
          className={styles.placeholder}
        />

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/make-here">
            <div className={styles.thumbnailItem}>
              <p>Make Here</p>
              <Img
                fluid={data.thumbnailPrev.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>

          <Link to="/projects/mesh-archive">
            <div className={styles.thumbnailItem}>
              <p>Mesh Archive</p>
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
    galleryImage1: file(relativePath: { eq: "sonar/sonar-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "sonar/sonar-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(relativePath: { eq: "sonar/sonar-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(relativePath: { eq: "sonar/sonar-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage5: file(relativePath: { eq: "sonar/sonar-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage6: file(relativePath: { eq: "sonar/sonar-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/make-here-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/mesh-archive-feature.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
