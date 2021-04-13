import React from 'react';
import './Heading.scss';

export default function Heading({heading}) {
  return (
  <div className="header">
    <h1 className="header__title">{heading}</h1>
  </div>
  )
}
