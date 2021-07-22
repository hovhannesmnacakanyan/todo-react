import React from 'react';

const Text = (props) => {
  const { children, className } = props;

  return <span children={children} className={className}></span>;
};

export default Text;
