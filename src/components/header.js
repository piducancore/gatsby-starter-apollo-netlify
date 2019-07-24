import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img
        alt="Gatsby"
        src="https://www.gatsbyjs.org/monogram.svg"
        width="60"
      />
      <img
        alt="Apollo"
        src="https://rawgit.com/apollographql/apollo-client/master/docs/source/logo/square.png"
        width="60"
        style={{ marginLeft: "16px", marginRight: "16px" }}
      />
      <img
        alt="Netlify"
        src="https://www.netlify.com/img/press/logos/logomark.png"
        width="60"
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
