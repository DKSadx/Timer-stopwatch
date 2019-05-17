import React from 'react';

export const Counter = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}