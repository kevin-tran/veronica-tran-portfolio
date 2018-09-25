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
                            <p><b>Skagen</b></p>
                            <p className={styles.subtitle}>UI/UX, Motion Design</p>
                        </div>

                        <div className={styles.contentContainer}>
                            <p><b>Assisting a community of makers and leaders</b></p>
                            <p>An engaging, immersive digital experience based on the colour, time, and light within the town of Skagen, using Skagens Museum to bring the local community closer together and rediscover the beauty within their home.</p>
                            <p>The aim was to create concept that brings people in the local community closer together and makes them proud of where they live, and attracts people to the area to visit and potentially settle down. </p>
                        </div>
                    </section>
                </div>

                <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage5.childImageSharp.fluid} className={styles.placeholder} />
                <div className={styles.imageContainer}>
                  <div style={{ width: '100%', paddingBottom: '56.25%' }}></div>
                  <img src={data.galleryImage6.publicURL} className={styles.placeholder} alt='skagen item 6' />
                </div>

                <div className={styles.thumbnailContainer}>

                    <Link to='/projects/unbound'>
                        <p>Unbound</p>
                        <div className={styles.thumbnailItem}>
                        <Img fluid={data.thumbnailPrev.childImageSharp.fluid} className={styles.thumbnail} />
                        </div>
                    </Link>

                    <Link to='/projects/wikifrags'>
                        <p>Wikifrags</p>
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
  galleryImage1: file(relativePath: { eq: "ska/ska-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage2: file(relativePath: { eq: "ska/ska-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage3: file(relativePath: { eq: "ska/ska-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "ska/ska-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage5: file(relativePath: { eq: "ska/ska-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage6: file(relativePath: { eq: "ska/ska-6.gif" }) {
    publicURL
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/unbound-feature.png" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/wikipedia-fragments-feature.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
}
`;
