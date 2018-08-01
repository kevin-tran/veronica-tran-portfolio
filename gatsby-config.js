const config = require("./config/meta");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    siteUrl: config.siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
      },
    },
    'gatsby-plugin-offline'
  ]
}
