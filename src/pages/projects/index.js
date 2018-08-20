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
      {/* <Link to='/projects/contemporary-hotels' className={styles.projectCard} style={{ backgroundImage: `url(${chThumbnail})` }} />
      <div className={styles.projectCard}>
      </div>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${isoThumbnail})` }}>
      </div>
      <div className={styles.projectCard} style={{ backgroundImage: `url(${caThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${fcThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${meshThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${unboundThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${driftThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${skaThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${wikifragsThumbnail})` }}>
      </div>

      <div className={styles.projectCard} style={{ backgroundImage: `url(${cadThumbnail})` }}>
      </div> */}
    </div>
  </div>
)

export default ProjectsPage

export const query = graphql`
query {
  thumbnail1: file(relativePath: { eq: "thumbnails/ch-feature-thumbnail.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail2: file(relativePath: { eq: "thumbnails/odyssey-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail3: file(relativePath: { eq: "thumbnails/fc-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail4: file(relativePath: { eq: "thumbnails/ca-feature-thumbnail.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail5: file(relativePath: { eq: "thumbnails/iso-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail6: file(relativePath: { eq: "thumbnails/cad-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail7: file(relativePath: { eq: "thumbnails/mesh-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail8: file(relativePath: { eq: "thumbnails/unbound-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail9: file(relativePath: { eq: "thumbnails/drift-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail10: file(relativePath: { eq: "thumbnails/ska-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  thumbnail11: file(relativePath: { eq: "thumbnails/wikifrags-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;