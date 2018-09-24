import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
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

  const discusScript = `
   var disqus_config = function () {
   this.page.url = 'https://blog.farosdev.com${location.pathname}';  // Replace PAGE_URL with your page's canonical URL variable
   this.page.identifier = '${location.pathname}'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
   };
   (function() { // DON'T EDIT BELOW THIS LINE
   var d = document, s = d.createElement('script');
   s.src =  'https://blog-farosdev-com.disqus.com/embed.js';;
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();`;

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

      <div id="disqus_thread" />
      <script dangerouslySetInnerHTML={{ __html: discusScript }} />
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
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
      <script id="dsq-count-scr" src="//blog-farosdev-com.disqus.com/count.js" async />
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
