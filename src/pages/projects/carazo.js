import React from 'react';
import { Link } from 'gatsby';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './template.module.scss';


class CarazoPage extends React.Component {

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
                            <p><b>Carazo</b></p>
                            <p className={styles.subtitle}>UI/UX, Motion Design</p>
                            <p className={styles.subtitle}>AGENCY: LIQUID</p>
                        </div>

                        <div className={styles.contentContainer}>
                            <p><b>Playful and exploratory architecture portfolio</b></p>
                            <p>Design of a user-friendly, intuitive, but playful and exploratory portfolio for Costa Rican based architects 'Carazo Architecture'. It balances a minimal interface with striking project imagery.</p>
                        </div>
                    </section>
                </div>

                <img src={data.galleryImage1.publicURL} className={styles.placeholder} alt='carazo gallery item 1' />
                <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
                <img src={data.galleryImage5.publicURL} className={styles.placeholder} alt='carazo gallery item 5' />
                <img src={data.galleryImage6.publicURL} className={styles.placeholder} alt='carazo gallery item 6'  />
                <Img fluid={data.galleryImage7.childImageSharp.fluid} className={styles.placeholder} />

                <div className={styles.thumbnailContainer}>

                    <Link to='/projects/contemporary-hotels'>
                        <p>Contemporary Hotels</p>
                        <div className={styles.thumbnailItem}>
                            <Img fluid={data.thumbnailPrev.childImageSharp.fluid} className={styles.thumbnail} />
                        </div>
                    </Link>

                    <Link to='/projects/fab-city'>
                        <p>Fab City</p>
                        <div className={styles.thumbnailItem}>
                        <Img fluid={data.thumbnailNext.childImageSharp.fluid} className={styles.thumbnail} />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CarazoPage

export const query = graphql`
query {
  galleryImage1: file(relativePath: { eq: "ca/ca-1.gif" }) {
      publicURL
  }
  galleryImage2: file(relativePath: { eq: "ca/ca-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage3: file(relativePath: { eq: "ca/ca-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "ca/ca-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "ca/ca-5.gif" }) {
    publicURL
  }
  galleryImage6: file(relativePath: { eq: "ca/ca-6.gif" }) {
    publicURL
  }
  galleryImage7: file(relativePath: { eq: "ca/ca-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/contemporary-hotels-feature.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/fab-city-feature.png" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
}
`;
