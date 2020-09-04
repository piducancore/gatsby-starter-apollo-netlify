/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"

import Toggle from "./toggle"

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
  const { title } = data.site.siteMetadata
  return (
    <Styled.root
      sx={{
        width: "100%",
        maxWidth: "container",
        m: "0 auto",
        display: `flex`,
        flexDirection: `column`,
        minHeight: `100vh`,
        p: 3,
      }}
    >
      <Global
        styles={(theme) => ({
          "*:focus": {
            outline: 0,
          },
        })}
      />
      <header
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Styled.h1
          sx={{
            flex: 1,
          }}
        >
          {title}
        </Styled.h1>

        <Toggle />
      </header>
      <main
        sx={{
          flex: 1,
        }}
      >
        {children}
      </main>
      <footer>
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
