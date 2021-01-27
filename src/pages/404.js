import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>404 Not Found</h1>
        <p>Looks like the page you are looking is not found. You may go back to the <Link to={`/`}>Homepage</Link> or read some of my latest posts below</p>
        <ul class="suggested-article-list" style={{listStyle: 'none'}}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <li key={node.fields.slug}>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    <span aria-hidden="true">🚩</span> {title}
                    </Link>
                </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },limit:4) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
