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
                            <p><b>Mesh</b></p>
                            <p className={styles.subtitle}>Illustration</p>
                        </div>

                        <div className={styles.contentContainer}>
                            <p><b>Nurturing digital communities</b></p>
                            <p>Online collective/publication. Mesh is a digital archive of community knowledge and a learning project. Created a series of illustrations for Mesh’s online publication and projects, including Memory Cards, Introduction essays, and an essay titled ‘Digital Diaspora: Exit and Movement’, written for issue one of Mesh Archive.</p>
                        </div>
                    </section>
                </div>

                <Img fluid={data.galleryImage1.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage2.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage3.childImageSharp.fluid} className={styles.placeholder} />
                <Img fluid={data.galleryImage4.childImageSharp.fluid} className={styles.placeholder} />

                <div className={styles.thumbnailContainer}>

                    <Link to='/projects/isotype'>
                        <p>Isotype</p>
                        <div className={styles.thumbnailItem}>
                            <Img fluid={data.thumbnailPrev.childImageSharp.fluid} className={styles.thumbnail} />
                        </div>
                    </Link>

                    <Link to='/projects/unbound'>
                        <p>Unbound</p>
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
  galleryImage1: file(relativePath: { eq: "mesh/mesh-1.png" }) {
    childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
  galleryImage2: file(relativePath: { eq: "mesh/mesh-2.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage3: file(relativePath: { eq: "mesh/mesh-3.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  galleryImage4: file(relativePath: { eq: "mesh/mesh-4.png" }) {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailPrev: file(relativePath: { eq: "thumbnails/isotype-feature.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  thumbnailNext: file(relativePath: { eq: "thumbnails/unbound-feature.png" }) {
    childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
  }
}
`;
