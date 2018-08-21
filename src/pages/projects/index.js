import React from 'react'
import { Link, graphql } from 'gatsby';

import Img from 'gatsby-image';

import styles from './index.module.scss'

const ProjectsPage = ({ data }) => (
  <div className={styles.projectContainer}>
    <div className={styles.projectRow}>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail1.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail2.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail3.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail4.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail5.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail6.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail7.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail8.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail9.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail10.childImageSharp.fluid}  />
    </Link>
    <Link to='/projects/contemporary-hotels' className={styles.projectCard}>
      <Img fluid={data.thumbnail11.childImageSharp.fluid}  />
    </Link>
    </div>
  </div>
)

export default ProjectsPage

export const query = graphql`
query {
  thumbnail1: file(relativePath: { eq: "thumbnails/ch-feature-thumbnail.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail2: file(relativePath: { eq: "thumbnails/odyssey-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail3: file(relativePath: { eq: "thumbnails/fc-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail4: file(relativePath: { eq: "thumbnails/ca-feature-thumbnail.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail5: file(relativePath: { eq: "thumbnails/iso-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail6: file(relativePath: { eq: "thumbnails/cad-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail7: file(relativePath: { eq: "thumbnails/mesh-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail8: file(relativePath: { eq: "thumbnails/unbound-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail9: file(relativePath: { eq: "thumbnails/drift-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail10: file(relativePath: { eq: "thumbnails/ska-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnail11: file(relativePath: { eq: "thumbnails/wikifrags-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`;