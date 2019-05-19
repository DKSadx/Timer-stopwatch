import React from 'react';

export const Button = (props) => {
  const { className, onClick, children } = props;
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <p>
        {children}
      </p>
    </button>
  );
}