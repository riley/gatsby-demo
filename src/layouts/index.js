import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import get from 'lodash/get'

import TopLevelNav from './TopLevelNav'
import SubNav from  './SubNav'

import "../css/typography.css"

require('prismjs/themes/prism-okaidia.css')

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Mineral UI"
          meta={[
            { name: "description", content: "A Component Library Built in React at the folks at CA Technologies" },
            { name: "keywords", content: "react, component, library, ui, javascript" },
          ]}
        />
        <div
          style={{
            background: `lightblue`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Mineral UI
              </Link>
            </h1>
            <TopLevelNav />
          </div>
        </div>
        <SubNav />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
