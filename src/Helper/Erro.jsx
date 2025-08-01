import React from 'react';
import style from './Erro.module.css';
import PropTypes from 'prop-types';

const Erro = ({mensagem, telaInteira}) => {

  function handleErro() {
    if(telaInteira) location.reload();
  }

  return (
    <div className={telaInteira ? style.erro : `error`} onClick={handleErro}>{mensagem}</div>
  )
}

Erro.defaultProps = {
  telaInteira: false,
}

Erro.propTypes = {
  telaInteira: PropTypes.bool,
  mensagem: PropTypes.string,
}

export default Erro;