import React from 'react'
import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';

import styles from './index.module.scss'

const ProjectsPage = ({ data }) => (
  <div className={styles.projectContainer}>
    <div className={styles.projectRow}>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail1.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }}></div>
        <img src={data.thumbnail2.publicURL} className={styles.imageThumb} alt='carazo thumbnail' />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail3.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail4.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail5.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail6.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <div style={{ width: '100%', paddingBottom: '56.25%' }}></div>
        <img src={data.thumbnail7.publicURL} className={styles.imageThumb} alt='ska thumbnail' />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail8.childImageSharp.fluid} />
      </Link>
      <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
        <Img fluid={data.thumbnail9.childImageSharp.fluid} />
      </Link>
    </div>
  </div>
)

export default ProjectsPage

export const query = graphql`
query {
  thumbnail1: file(relativePath: { eq: "thumbnails/contemporary-hotels-feature.jpg" }) {
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
  thumbnail5: file(relativePath: { eq: "thumbnails/mesh-archive-feature.png" }) {
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
  thumbnail8: file(relativePath: { eq: "thumbnails/wikipedia-fragments-feature.jpg" }) {
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
}
`;