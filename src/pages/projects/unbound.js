import React from 'react';
import { Link } from 'gatsby';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './template.module.scss';


class IsotypePage extends React.Component {

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
                            <p><b>Unbound</b></p>
                            <p className={styles.subtitle}>Publication</p>
                        </div>

                        <div className={styles.contentContainer}>
                            <p><b>Deconstructing a classic novel </b></p>
                            <p>A reinterpretation of the Frankenstein novel, and accumulated set of experiments put together in a way that tells a parallel and gradual narrative to the novel. It aims to look at the Frankenstein text in conjunction with typographic experiments via layering the text, pulling apart legibility, and utilizing vibrant colours, creating a monster in the process.</p>
                        </div>
                    </section>
                </div>

                <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage5.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage6.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage7.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage8.childImageSharp.fluid} className={styles.placeholder} />

                <div className={styles.thumbnailContainer}>

                    <Link to='/projects/mesh-archive'>
                        <p>Mesh</p>
                        <div className={styles.thumbnailItem}>
                            <Img fluid={data.thumbnailPrev.childImageSharp.fluid} className={styles.thumbnail} />
                        </div>
                    </Link>

                    <Link to='/projects/skagen'>
                        <p>Skagen</p>
                        <div className={styles.thumbnailItem}>
                        <img src={data.thumbnailNext.publicURL} className={styles.thumbnail} alt='carazo thumbnail' />
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default IsotypePage

export const query = graphql`
query {
  galleryImage1: file(relativePath: { eq: "unbound/unbound-1.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
  galleryImage3: file(relativePath: { eq: "unbound/unbound-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "unbound/unbound-4.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "unbound/unbound-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage6: file(relativePath: { eq: "unbound/unbound-6.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage7: file(relativePath: { eq: "unbound/unbound-7.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage8: file(relativePath: { eq: "unbound/unbound-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/mesh-archive-feature.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/skagen-feature.gif" }) {
    publicURL
  }
}
`;
