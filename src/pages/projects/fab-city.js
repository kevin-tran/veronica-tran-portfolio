import React from 'react';
import { Link } from 'gatsby';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './template.module.scss';


class FabCityPage extends React.Component {

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
              <p><b>Fab City</b></p>
              <p className={styles.subtitle}>Identity, UI/UX</p>
            </div>

            <div className={styles.contentContainer}>
              <p><b>Assisting a community of makers and leaders</b></p>
              <p>Rebellious, impactful, community-focused, human, designed. Fab City is an inclusive brand that stands for change, forward thinking and activism. I assisted with extending their visual language as well as designing a refreshed website.</p>
            </div>
          </section>
        </div>

        <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
        <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
        <img src={data.galleryImage5.publicURL} className={styles.placeholder} alt='fab city gallery item 5' />

        <div className={styles.thumbnailContainer}>

          <Link to='/projects/carazo'>
            <p>Carazo</p>
            <div className={styles.thumbnailItem}>
              <div style={{ width: '100%', paddingBottom: '56.25%' }}></div>
              <img src={data.thumbnailPrev.publicURL} className={styles.imageThumb} alt='carazo thumbnail' />
            </div>
          </Link>

          <Link to='/projects/isotype'>
            <p>Isotype</p>
            <div className={styles.thumbnailItem}>
              <Img fluid={data.thumbnailNext.childImageSharp.fluid} className={styles.thumbnail} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default FabCityPage

export const query = graphql`
query {
  galleryImage1: file(relativePath: { eq: "fc/fc-1.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage2: file(relativePath: { eq: "fc/fc-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage3: file(relativePath: { eq: "fc/fc-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "fc/fc-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "fc/fc-5.gif" }) {
    publicURL
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/carazo-feature.gif" }) {
    publicURL
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/isotype-feature.png" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
}
`;
