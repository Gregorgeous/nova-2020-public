module.exports = {
  siteMetadata: {
    title: 'Hufiec ZHP Warszawa-Żoliborz',
    author: 'Grzegorz Rybak',
    description: 'Oficjalna strona hufca ZHP Warszawa-Żoliborz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `images`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms',
    {
      options: {
      },
    },
  ],
}
