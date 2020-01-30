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
                <b>Make Here</b>
              </p>
              <p className={styles.subtitle}>
                COMMUNITY PROJECT, IDENTITY, MAPPING
              </p>
            </div>

            <div className={styles.contentContainer}>
              <p>
                <b>Connecting people who make to people wanting to make</b>
              </p>
              <p>
                Make Here is a project to create a community around local
                production. We want to trigger the conversation between makers
                to cultivate local production by sharing knowledge, information,
                ideas, recommendations, and more in a city or neighbourhood. We
                mapped information about maker-spaces, material suppliers,
                workshops and other creative spaces in Poblenou, Barcelona.
                Anyone can go through the same process, developing Make Here in
                their own cities through the aid of our toolkit. Developed at
                IaaC, with Jessica Guy, Emily Whyman, Alex Acsensi, Gabriela
                Martinez, Ola Łukaszewska.
              </p>
            </div>
          </section>
        </div>

        <Img
          fluid={data.galleryImage1.childImageSharp.fluid}
          className={styles.placeholder}
        />

        <div className={styles.imageContainer}>
          <div style={{ width: '100%', paddingBottom: '56.25%' }} />
          <img
            src={data.galleryImage2.publicURL}
            className={styles.placeholder}
          />
        </div>
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
          <Link to="/projects/fab-city">
            <p>Fab City</p>
            <div className={styles.thumbnailItem}>
              <Img
                fluid={data.thumbnailPrev.childImageSharp.fluid}
                className={styles.thumbnail}
              />
            </div>
          </Link>

          <Link to="/projects/sonar">
            <p>Sonar +D MuseIn</p>
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
    galleryImage1: file(relativePath: { eq: "mh/mh-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage2: file(relativePath: { eq: "mh/mh-2.gif" }) {
      publicURL
    }
    galleryImage3: file(relativePath: { eq: "mh/mh-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage4: file(relativePath: { eq: "mh/mh-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage5: file(relativePath: { eq: "mh/mh-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryImage6: file(relativePath: { eq: "mh/mh-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailPrev: file(
      relativePath: { eq: "thumbnails/fab-city-feature.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    thumbnailNext: file(relativePath: { eq: "thumbnails/sonar-feature.gif" }) {
      publicURL
    }
  }
`
