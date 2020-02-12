const visit = require(`unist-util-visit`);
const cheerio = require(`cheerio`);

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
  visit(markdownAST, [`html`, `jsx`], node => {
    if (!node.value) {
      return;
    }

    const $ = cheerio.load(node.value, {
      xml: true
    });
    const images = $(`img`);
    if (images.length === 0) {
      return;
    }

    for (let i = 0; i < images.length; i++) {
      const img = images[i];

      if (img.attribs.src.startsWith(`http://`)) {
        img.attribs.src = img.attribs.src.replace(`http://`, `https://`);
      }
    }

    node.value = $.xml();
  });
};
