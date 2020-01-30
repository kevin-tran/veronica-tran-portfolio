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
                <b>READ-WRITE Installation</b>
              </p>
              <p className={styles.subtitle}>
                PROJECTION MAPPING, VISUAL PROGRAMMING, DIGITAL FABRICATION,
                ELECTRONICS
              </p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Visualising binary information encoded into DNA</b>
              </p>
              <p>
                A printer records the live movements of the colours by printing
                it’s the genomic translation from binary data to As Cs Gs and
                Ts. Afterwards, a pump moves the ‘synthetic DNA’ created from
                the previous data into a speculative DNA_USB microfluidic chip.
                A visual interface visualises this sequences of actions through
                an LCD touchscreen. As the printer reads and translates the
                animations in real-time, the installation thus becomes a
                mechanism for the machine to read and write onto itself, a
                metaphor for the cloning of DNA, replicating the stages of a
                polymerase chain reaction.
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
          fluid={data.galleryImage6.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage7.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage8.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage9.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage10.childImageSharp.fluid}
          className={styles.placeholder}
        />
        <Img
          fluid={data.galleryImage11.childImageSharp.fluid}
          className={styles.placeholder}
        />

        <div className={styles.thumbnailContainer}>
          <Link to="/projects/read-write-publication">
            <p>READ-WRITE Publication</p>
            <div className={styles.thumbnailItem}>
              <div style={{ width: '100%', paddingBottom: '56.25%' }} />
              <img
                src={data.thumbnailPrev.publicURL}
                className={styles.imageThumb}
                alt="carazo thumbnail"
              />
            </div>
          </Link>

          <Link to="/projects/contemporary-hotels">
            <div className={styles.thumbnailItem}>
              <p>Contemporary Hotels</p>
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
    galleryImage1: file(relativePath: { eq: "rw/rw-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "rw/rw-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage3: file(relativePath: { eq: "rw/rw-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(relativePath: { eq: "rw/rw-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage6: file(relativePath: { eq: "rw/rw-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage7: file(relativePath: { eq: "rw/rw-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage8: file(relativePath: { eq: "rw/rw-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage9: file(relativePath: { eq: "rw/rw-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage10: file(relativePath: { eq: "rw/rw-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage11: file(relativePath: { eq: "rw/rw-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/read-write-publication-feature.gif" }
    ) {
      publicURL
    }
    thumbnailNext: file(
      relativePath: { eq: "thumbnails/contemporary-hotels-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
