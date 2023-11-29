import React from 'react';
import Head from '../../Helper/Head';
import Feed from '../Feed/Feed';
import { useSelector } from 'react-redux';

const MinhaConta = () => {
  const {dados} = useSelector((state)=> state.login.user);
  
  return (
    <>
      <Head title='Minha Conta' descricao=''/>  
      <Feed user={dados && dados.id}/>
    </>
  )
}

export default MinhaConta