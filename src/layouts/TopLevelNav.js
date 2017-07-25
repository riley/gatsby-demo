import React from 'react';
import Link from 'gatsby-link';

import '../css/typography.css';

export default function TopLevelNav ({pages}) {

  const style = {textDecoration: 'none', marginRight: '1rem'}

  return (
    <div>
      <Link style={style} to="/getting-started/">Dig In</Link>
      <Link style={style} to="/guidelines/">Guidelines</Link>
      <Link style={style} to="/components/">Components</Link>
      <Link style={style} to="/whats-new/">What's New</Link>
      <Link style={style} to="/resources/">Resources</Link>
    </div>
  )
}
