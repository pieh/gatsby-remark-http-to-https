const fs = require(`fs`);
const path = require(`path`);

describe.each([
  [`gatsby-transformer-remark`, `example-remark`],
  [`gatsby-plugin-mdx`, `example-mdx`]
])(`%s`, (name, dir) => {
  const htmlContent = fs.readFileSync(
    path.join(__dirname, `..`, dir, `public`, `index.html`),
    `utf-8`
  );

  it(`doesn't contain http://`, () => {
    expect(htmlContent.includes(`http://`)).toBeFalsy();
  });

  it(`contains https://`, () => {
    expect(htmlContent.includes(`https://`)).toBeTruthy();
  });
});
