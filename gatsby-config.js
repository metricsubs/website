module.exports = {
  siteMetadata: {
    title: 'MetricSubs',
    siteUrl: 'https://metricsubs.cn',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
