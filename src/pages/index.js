import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';

/* eslint-disable no-unused-expressions */
injectGlobal`
  video {
    max-width: 100%;
  }
`;
/* eslint-enable no-unused-expressions */

const BlogIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const siteDescription = get(
    this,
    'props.data.site.siteMetadata.description',
  );
  const posts = get(props, 'data.allMarkdownRemark.edges');
  const { location } = props;
  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
