import React, { Fragment } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Img from 'gatsby-image'


class Layout extends React.Component {
  render() {
    const { location, title, children,cover } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Fragment>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      </Fragment>
      )
    } else {
      header = (
        <fragment>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        {cover ? <Img sizes={cover.childImageSharp.sizes} /> : null}
        </fragment>
      )
    }
    return (
      <div className="blog-wrapper"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
