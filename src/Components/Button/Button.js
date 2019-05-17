import React from 'react';

export const Button = (props) => {
  const { className, children } = props;
  return (
    <button className={className}>
      {children}
    </button>
  );
}