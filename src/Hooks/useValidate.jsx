import React from 'react';

export const types = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
    message: 'Por favor, digite um e-mail válido!'
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: 'Digite letras e números.'
  }
}

export const useValidate = (type) => {
  const [dado, setDado] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate(dado) {
    if(type === false) return true;
    if(dado.length === 0){
      setErro('Preencha um valor.');
      return false;
    }
    else if(types[type] && !types[type].regex.test(dado)){
      setErro(types[type].message);
      return false;
    }
    else {
      setErro(null);
      return true;
    }
  }

  function handleChange({target}) {
    if(erro) validate(dado)
    setDado(target.value);
  }

  return {
    dado,
    setDado,
    erro,
    setErro,
    handleChange,
    validate: ()=> validate(dado),
    onBlur: ()=> validate(dado)
  }
}