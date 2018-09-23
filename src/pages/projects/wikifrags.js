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
                            <p><b>WikiFragments</b></p>
                            <p className={styles.subtitle}>Data Design, Type Design</p>
                        </div>

                        <div className={styles.contentContainer}>
                            <p><b>Investigating forgotten data</b></p>
                            <p>An investigation into broken and forgotten data– asking at what point is a sequence not data, but narrative? These experiments aim to test the flexibility and authority of source visually, looking at strength of structure vs. influence of randomness.</p>
                        </div>
                    </section>
                </div>

                <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage5.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage6.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage7.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage8.childImageSharp.fluid} className={styles.placeholder} />

                <div className={styles.thumbnailContainer}>

                    <Link to='/projects/skagen'>
                        <p>Skagen</p>
                        <div className={styles.thumbnailItem}>
                        <img src={data.thumbnailPrev.publicURL} className={styles.thumbnail} alt='skagen thumbnail' />
                        </div>
                    </Link>

                    <Link to='/projects/cadigal'>
                        <p>Cadigal</p>
                        <div className={styles.thumbnailItem}>
                        <Img fluid={data.thumbnailNext.childImageSharp.fluid} className={styles.thumbnail} />
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
  galleryImage1: file(relativePath: { eq: "wikifrags/wikifrags-1.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
  galleryImage2: file(relativePath: { eq: "wikifrags/wikifrags-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage3: file(relativePath: { eq: "wikifrags/wikifrags-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "wikifrags/wikifrags-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "wikifrags/wikifrags-5.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
  galleryImage6: file(relativePath: { eq: "wikifrags/wikifrags-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage7: file(relativePath: { eq: "wikifrags/wikifrags-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage8: file(relativePath: { eq: "wikifrags/wikifrags-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/skagen-feature.gif" }) {
    publicURL
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/cadigal-feature.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
}
`;
