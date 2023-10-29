import React from 'react';
import style from './Input.module.css';
import Erro from '../.././Helper/Erro.jsx';

const Input = ({nome, tipo, handleChange, dado, erro, onBlur}) => {

  return (
    <div className={style.Input}>
      <label htmlFor={nome}>{nome}</label>
      <input type={tipo} id={nome} name={nome} onChange={handleChange} value={dado} onBlur={onBlur}/>
      {erro && <Erro mensagem={erro}/>}
    </div>
  )
}

export default Input;