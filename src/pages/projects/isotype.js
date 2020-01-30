import React from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './template.module.scss'

class IsotypePage extends React.Component {
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
                <b>Isotype</b>
              </p>
              <p className={styles.subtitle}>Type Design, 3D Printing</p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Exhibiting form, balance, and perspective</b>
              </p>
              <p>
                Typeface created using 3D printing, and is a series of letters
                that can only be viewed from an isometric angle. Any other
                direction, and it will be skewed to the point of illegibility.
                It was an exploration of bringing a common illustrative trope
                I’ve seen into a real 3D space.
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
        <Img
          fluid={data.galleryImage7.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <div className={styles.imageContainer}>
          <div style={{ width: '100%', paddingBottom: '56.25%' }} />
          <img
            src={data.galleryImage8.publicURL}
            className={styles.placeholder}
            alt="iso city gallery item 6"
          />
        </div>

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/mesh-archive">
            <p>Mesh</p>
            <div className={styles.thumbnailItem}>
              <Img
                fluid={data.thumbnailPrev.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>

          <Link to="/projects/wikifrags">
            <div className={styles.thumbnailItem}>
              <p>Wikifrags</p>
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

export default IsotypePage

export const query = graphql`
  query {
    galleryImage1: file(relativePath: { eq: "iso/iso-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "iso/iso-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(relativePath: { eq: "iso/iso-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(relativePath: { eq: "iso/iso-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage5: file(relativePath: { eq: "iso/iso-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage6: file(relativePath: { eq: "iso/iso-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage7: file(relativePath: { eq: "iso/iso-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage8: file(relativePath: { eq: "iso/iso-8.gif" }) {
      publicURL
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/mesh-archive-feature.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/wikipedia-fragments-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
