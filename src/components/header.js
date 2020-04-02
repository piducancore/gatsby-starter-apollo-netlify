/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logos = () => {
  return (
    <Styled.div
      sx={{
        bg: `text`,
        marginBottom: 4,
      }}
    >
      <div
        sx={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-evenly`,
          mx: `auto`,
          maxWidth: `container`,
          py: 3,
          // px: 3,
        }}
      >
        <a href="https://www.gatsbyjs.org/">
          <img
            alt="Gatsby"
            src="https://www.gatsbyjs.org/monogram.svg"
            sx={{
              width: [`24px`, `32px`, `48px`],
            }}
          />
        </a>
        <a href="https://www.apollographql.com/">
          <img
            alt="Apollo"
            src="https://rawgit.com/apollographql/apollo-client/master/docs/source/logo/square.png"
            sx={{
              width: [`24px`, `32px`, `48px`],
            }}
          />
        </a>
        <a href="https://www.netlify.com/">
          <img
            alt="Netlify"
            src="https://www.netlify.com/img/press/logos/logomark.png"
            sx={{
              width: [`24px`, `32px`, `48px`],
            }}
          />
        </a>
        <a href="https://theme-ui.com/">
          <img
            alt="Theme UI"
            src="https://raw.githubusercontent.com/system-ui/theme-ui/master/packages/docs/static/logo.png"
            sx={{
              width: [`24px`, `32px`, `48px`],
            }}
          />
        </a>
      </div>
    </Styled.div>
  )
}

const Header = ({ siteTitle }) => (
  <Styled.div as="header">
    <Logos />
    <Styled.div sx={{ mb: 4, mx: `auto`, maxWidth: `container`, px: 3 }}>
      <Styled.h1>
        <Link
          to="/"
          sx={{
            color: `primary`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Styled.h1>
    </Styled.div>
  </Styled.div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
