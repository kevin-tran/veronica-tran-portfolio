import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import styles from './template.module.scss'


const ContemporaryHotelsPage = ({ data }) => (
    <div className={styles.container}>
      <div>
        <section className={styles.headerContainer}>
          <div>
            <p><b>Contemporary Hotels</b></p>
            <p>Project Subheading</p>
          </div>

          <div className={styles.contentContainer}>
            <p>UX, UI, ILLUSTRATION, MOTION</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className={styles.contentContainer}>
            <p>AGENCY: LIQUID</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </section>
      </div>

      <Img fluid={data.galleryImage1.childImageSharp.fluid} />
      <Img fluid={data.galleryImage2.childImageSharp.fluid} />
      <Img fluid={data.galleryImage4.childImageSharp.fluid} />
      <Img fluid={data.galleryImage5.childImageSharp.fluid} />
      <Img fluid={data.galleryImage6.childImageSharp.fluid} />
    </div>
);

export default ContemporaryHotelsPage

export const query = graphql`
query {
  galleryImage1: file(relativePath: { eq: "ch/ch-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage2: file(relativePath: { eq: "ch/ch-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "ch/ch-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "ch/ch-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage6: file(relativePath: { eq: "ch/ch-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`;
