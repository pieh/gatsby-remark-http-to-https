const visit = require(`unist-util-visit`);

module.exports = ({ markdownAST }) => {
  visit(
    markdownAST,
    node => {
      return node.type === `image` && node.url.startsWith(`http://`);
    },
    node => {
      node.url = node.url.replace(`http://`, `https://`);
    }
  );
};
