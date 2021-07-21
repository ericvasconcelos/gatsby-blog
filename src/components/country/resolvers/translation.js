import React from 'react';

export const translation = (val) => (
  <ul>
    {Object.entries(val).map(([key, value]) => (
      <li key={key}>
        {key.toUpperCase()}: {value}
      </li>
    ))}
  </ul>
);
