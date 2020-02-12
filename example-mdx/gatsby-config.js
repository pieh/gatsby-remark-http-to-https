const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`../md`)
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],
        gatsbyRemarkPlugins: [`gatsby-remark-http-to-https`]
      }
    }
  ]
};
