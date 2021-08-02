import React from 'react';
import PropTypes from 'prop-types';

const Spacing = ({ className, children }) => {
  return <div className={className} children={children} />;
};

Spacing.defaultProps = {
  children: null,
  className: null,
};

Spacing.propTypes = {
  className: PropTypes.string,
};

export default Spacing;
