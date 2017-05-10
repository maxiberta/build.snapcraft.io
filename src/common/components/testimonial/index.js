import React, { PropTypes } from 'react';

import style from './testimonial.css';

export default function Testimonial(props) {
  return (
    <div>
      <blockquote className={ style.pullQuote }>
        <p>
          <span>&ldquo;</span>{ props.children }<span>&rdquo;</span>
        </p>
      </blockquote>
      <cite className={ style.pullQuoteCitation }>
        <span className={ style.pullQuoteLogo }><img src={ props.logo } alt='logo'/></span> { props.citation }
      </cite>
    </div>
  );
}

Testimonial.propTypes = {
  logo: PropTypes.string,
  citation: PropTypes.string,
  children: PropTypes.string
};
