import React from 'react';
import style from './Erro.module.css';

const Erro = ({mensagem, telaInteira, setErro, setModalPhoto}) => {

  function handleErro() {
    if(setErro){
      setModalPhoto(null);
      setErro(null);
      location.reload();
    } 
  }

  return (
    <div className={telaInteira ? style.erro : `error`} onClick={handleErro}>{mensagem}</div>
  )
}

export default Erro;