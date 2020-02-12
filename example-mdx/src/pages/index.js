import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default ({
  data: {
    allMdx: { nodes }
  }
}) => (
  <ul>
    {nodes.map(({ id, body }) => (
      <li key={id}>
        <MDXRenderer>{body}</MDXRenderer>
      </li>
    ))}
  </ul>
);

export const pageQuery = graphql`
  {
    allMdx {
      nodes {
        body
      }
    }
  }
`;
