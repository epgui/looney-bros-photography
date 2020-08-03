require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  pathPrefix: '',
  siteMetadata: {
    siteUrl: 'https://www.looneybros.com/',
    pathPrefix: '',
    title: 'Looney Bros. Photography',
    titleAlt: 'Looney Bros. Photography',
    description: `Because we're in the business of bespoke services, we strive to capture the moments most important to you.`,
    logo: '/logos/logo-acadia-round.png',
    headline: 'We turn moments into pixels; pixels into feelings.',
    siteLanguage: 'en',
    ogLanguage: 'en_US',
    author: 'Guillaume Pelletier',
    twitter: '@epgui',
    facebook: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXXXX-X',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Looney Bros. Photography',
        short_name: 'Looney Bros. Photography',
        description: `Because we're in the business of bespoke services, we strive to capture the moments most important to you.`,
        start_url: '/',
        background_color: '#3b3c4f',
        theme_color: '#db7436',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Titillium Web',
            variants: ['300','700'],
          },
        ],
      },
    }
  ],
}
