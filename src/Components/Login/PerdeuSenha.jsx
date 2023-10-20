import React from 'react';
import H1 from '../Form/H1';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { useValidate } from '../../Hooks/useValidate';
import Head from '../../Helper/Head';

const PerdeuSenha = () => {
  const userEmail = useValidate('email');
  return (
    <div className='animationLeft'>
      <Head title='Perdeu a senha' descricao='Recupe sua senha'/>
      <H1 title='Perdeu a senha?'/>
      <Input nome="Email / Usuário" tipo='text' {...userEmail}/>
      <Button nome='Enviar Email'/>
    </div>
  )
}

export default PerdeuSenha