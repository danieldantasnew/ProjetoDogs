import React from 'react';
import style from './Button.module.css';

const Button = ({nome, ...props}) => {
  return (
    <button {...props} className={style.Botao}>{nome}</button>
  )
}

export default Button