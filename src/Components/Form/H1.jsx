import React from 'react';
import './H1.module.css';

const H1 = ({title, estilo}) => {
  return (
    <h1 style={estilo}>{title}</h1>
  )
}

export default H1;