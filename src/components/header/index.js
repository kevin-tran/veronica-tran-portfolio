import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import config from "../../../config/meta"

const Header = ({ data }) => (
  <Fragment>
  <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og:http://ogp.me/ns#"
      }}
      title={config.siteTitle}>
      <meta name="Veronica Tran" content="Portfolio" />
      <meta name="description" content={config.siteDescription} />
      <meta name="keywords" content="react, portfolio, gatsbyjs" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      /> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/favicons/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('/favicons/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('/favicons/favicon-16x16.png')}
      />
    </Helmet>
  </Fragment>
)

export default Header