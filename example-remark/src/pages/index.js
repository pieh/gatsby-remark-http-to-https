import React from "react";
import { graphql } from "gatsby";

export default ({
  data: {
    allMarkdownRemark: { nodes }
  }
}) => (
  <ul>
    {nodes.map(({ id, html }) => (
      <li key={id} dangerouslySetInnerHTML={{ __html: html }} />
    ))}
  </ul>
);

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
      }
    }
  }
`;
