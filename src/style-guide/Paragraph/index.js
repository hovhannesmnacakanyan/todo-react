import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => {
  return <p children={children} className={className}></p>;
};

Paragraph.defaultProps = {
  children: null,
  className: null,
};

Paragraph.propTypes = {
  className: PropTypes.string,
};

export default Paragraph;
