import React from 'react';

const Paragraph = (props) => {
  const { children, className } = props;

  return <p children={children} className={className}></p>;
};

export default Paragraph;
