import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const pageStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: rhythm(24),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
};

export default class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    const headerStyle = location.pathname === rootPath ?
      { ...scale(1.5), marginBottom: rhythm(1.5), marginTop: 0 } :
      { fontFamily: 'Montserrat, sans-serif', marginTop: 0, marginBottom: rhythm(-1) };

    return (
      <div style={pageStyle}>
        <h3 style={headerStyle}>
          <Link 
            style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }}
            to={'/'}
          >
            Faros Development Blog
          </Link>
        </h3>
        {children}
      </div>
    )
  }
}
