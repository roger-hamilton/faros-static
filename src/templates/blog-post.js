import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import { rhythm, scaled } from '../utils/typography';

const Date = styled.p`
  ${scaled(-1 / 5)} display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`;

const DiscoverList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const BlogPostTemplate = (props) => {
  const {
    data: { markdownRemark: post },
    pageContext: { previous, next },
    location,
  } = props;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const siteDescription = post.excerpt;

  return (
    <Layout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />

      <h1>{post.frontmatter.title}</h1>

      <Date>{post.frontmatter.date}</Date>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <hr style={{ marginBottom: rhythm(1) }} />

      <Bio />

      <DiscoverList>
        <li>
          {previous && (
          <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
          </Link>
          )}
        </li>
        <li>
          {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
          )}
        </li>
      </DiscoverList>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
