export const imageFormat = graphql`
fragment imageFormat on File {
      childImageSharp {
        fluid(maxWidth: 2400, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
}
`;