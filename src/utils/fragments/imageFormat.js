import { graphql } from 'gatsby';

export const imageFormat = graphql`
fragment imageFormat on File {
  childImageSharp {
    fluid(maxWidth: 1000, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp_noBase64
    }
  }
}
`;