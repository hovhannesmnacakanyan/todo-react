import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => {
  return <span children={children} className={className}></span>;
};

Text.defaultProps = {
  children: null,
  className: null,
};

Text.propTypes = {
  className: PropTypes.string,
};

export default Text;
