module.exports = {
  siteMetadata: {
    title: 'Financial services to support, simplify, and streamline your business.',
    titleTemplate: '%s | AB Consulting',
    description:
      'AB Consulting is a financial services organization focused on making things easy. We are obsessed with simplifying and streamlining⁠—for our customers, financial partners, employees, and community advocates.',
    siteUrl: 'https://abconsulting.net',
    image: {
      src: '/images/favicon.png',
      alt: 'AB Consulting Logo',
      width: '1200',
      height: '900',
    },
    twitterUsername: '@abconsulting',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AB Consulting',
        short_name: 'ABC',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'static/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-stylelint',
      options: {
        files: [ 'src/*.css' ],
        configFile: 'stylelint.config.js',
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
