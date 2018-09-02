import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import styles from './template.module.scss'


class ContemporaryHotelsPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const { data } = this.props;

    return (
      <div className={styles.container}>
        <div>
          <section className={styles.headerContainer}>
            <div className={styles.contentContainer}>
              <p><b>Contemporary Hotels</b></p>
              <p className={styles.subtitle}>UX, UI, ILLUSTRATION, MOTION</p>
              <p className={styles.subtitle}>AGENCY: LIQUID</p>
            </div>

            <div className={styles.contentContainer}>
              <p><b>Luxurious hotel booking experience</b></p>
              <p>Enhanced digital presence for Sydney based luxury accommodation specialists 'Contemporary Hotels', utilising a comprehensive property search, alongside a high-end showcase of their homes.</p>
            </div>
          </section>
        </div>

        <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage5.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage6.childImageSharp.fluid} className={styles.placeholder} />

        <div className={styles.thumbnailContainer}>
          <div className={styles.thumbnailItem}>
            <p>Carazo</p>
            <Img fluid={data.thumbnailPrev.childImageSharp.fluid} className={styles.thumbnail} />
          </div>
          <div className={styles.thumbnailItem}>
            <p>Carazo</p>
            <Img fluid={data.thumbnailNext.childImageSharp.fluid} className={styles.thumbnail} />
          </div>
        </div>
      </div>
    );
  }
}

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
  thumbnailNext: file(relativePath: { eq: "thumbnails/fc-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/fc-feature-thumbnail.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`;
