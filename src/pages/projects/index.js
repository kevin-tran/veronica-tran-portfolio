import React from 'react'
import { Link, graphql } from 'gatsby'

import Img from 'gatsby-image'

import styles from './index.module.scss'

const ProjectsPage = ({ data }) => (
  <div className={styles.projectContainer}>
    <div className={styles.projectRow}>
      <Link
        to="/projects/read-write-publication"
        className={styles.projectCard}
      >
        <div style={{ width: '100%', paddingBottom: '56.25%' }} />
        <img
          src={data.thumbnail14.publicURL}
          className={styles.imageThumb}
          alt="read-write thumbnail"
        />
      </Link>
      <Link
        to="/projects/read-write-installation"
        className={styles.projectCard}
      >
        <Img fluid={data.thumbnail13.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/contemporary-hotels" className={styles.projectCard}>
        <Img fluid={data.thumbnail1.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/carazo" className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }} />
        <img
          src={data.thumbnail2.publicURL}
          className={styles.imageThumb}
          alt="carazo thumbnail"
        />
      </Link>
      <Link to="/projects/fab-city" className={styles.projectCard}>
        <Img fluid={data.thumbnail3.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/make-here" className={styles.projectCard}>
        <Img fluid={data.thumbnail11.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/sonar" className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }} />
        <img
          src={data.thumbnail15.publicURL}
          className={styles.imageThumb}
          alt="sonar thumbnail"
        />
      </Link>
      <Link to="/projects/mesh-archive" className={styles.projectCard}>
        <Img fluid={data.thumbnail5.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/isotype" className={styles.projectCard}>
        <Img fluid={data.thumbnail4.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/wikifrags" className={styles.projectCard}>
        <Img fluid={data.thumbnail8.childImageSharp.fluid} />
      </Link>

      <Link to="/projects/unbound" className={styles.projectCard}>
        <Img fluid={data.thumbnail6.childImageSharp.fluid} />
      </Link>
      <Link to="/projects/skagen" className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }} />
        <img
          src={data.thumbnail7.publicURL}
          className={styles.imageThumb}
          alt="ska thumbnail"
        />
      </Link>
      <Link to="/projects/fab-academy" className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }} />
        <img
          src={data.thumbnail10.publicURL}
          className={styles.imageThumb}
          alt="fab thumbnail"
        />
      </Link>
      <Link
        to="/projects/material-driven-design"
        className={styles.projectCard}
      >
        <Img fluid={data.thumbnail12.childImageSharp.fluid} />
      </Link>

      <Link to="/projects/cadigal" className={styles.projectCard}>
        <Img fluid={data.thumbnail9.childImageSharp.fluid} />
      </Link>
    </div>
  </div>
)

export default ProjectsPage

export const query = graphql`
  query {
    thumbnail1: file(
      relativePath: { eq: "thumbnails/contemporary-hotels-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail2: file(relativePath: { eq: "thumbnails/carazo-feature.gif" }) {
      publicURL
    }
    thumbnail3: file(relativePath: { eq: "thumbnails/fab-city-feature.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail4: file(relativePath: { eq: "thumbnails/isotype-feature.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail5: file(
      relativePath: { eq: "thumbnails/mesh-archive-feature.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail6: file(relativePath: { eq: "thumbnails/unbound-feature.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail7: file(relativePath: { eq: "thumbnails/skagen-feature.gif" }) {
      publicURL
    }
    thumbnail8: file(
      relativePath: { eq: "thumbnails/wikipedia-fragments-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail9: file(relativePath: { eq: "thumbnails/cadigal-feature.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail10: file(
      relativePath: { eq: "thumbnails/fab-academy-feature.gif" }
    ) {
      publicURL
    }
    thumbnail11: file(
      relativePath: { eq: "thumbnails/make-here-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail12: file(
      relativePath: { eq: "thumbnails/material-driven-design-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail13: file(
      relativePath: { eq: "thumbnails/read-write-installation-feature.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbnail14: file(
      relativePath: { eq: "thumbnails/read-write-publication-feature.gif" }
    ) {
      publicURL
    }
    thumbnail15: file(relativePath: { eq: "thumbnails/sonar-feature.gif" }) {
      publicURL
    }
  }
`
