import React from 'react';

const Space = (props) => {
  const { className, children } = props;
  return <div className={className} children={children} />;
};

export default Space;
