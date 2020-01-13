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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/menu`,
        name: `menu`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
}
