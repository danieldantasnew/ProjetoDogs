import React from 'react';
import Head from '../../Helper/Head';
import Feed from '../Feed/Feed';
import { UserContext } from '../../UserContext';

const MinhaConta = () => {

  const dados = React.useContext(UserContext);
  

  return (
    <>
      <Head title='Minha Conta' descricao=''/>  
      <Feed user={dados && dados.dataUser.id}/>
    </>
  )
}

export default MinhaConta