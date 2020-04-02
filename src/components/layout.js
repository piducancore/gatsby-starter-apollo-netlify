/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Styled.root
      sx={{
        display: `flex`,
        flexDirection: `column`,
        minHeight: `100vh`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        sx={{
          flex: 1,
          mx: `auto`,
          my: 0,
          width: `100%`,
          maxWidth: `container`,
          p: 3,
          pt: 0,
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          mx: `auto`,
          width: `100%`,
          maxWidth: `container`,
          p: 3,
        }}
      >
        <Styled.p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
        </Styled.p>
      </footer>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
