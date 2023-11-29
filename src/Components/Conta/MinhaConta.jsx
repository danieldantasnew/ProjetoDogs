import React from 'react';
import Head from '../../Helper/Head';
import Feed from '../Feed/Feed';
import { useSelector } from 'react-redux';

const MinhaConta = () => {
  const {dados} = useSelector((state)=> state.login.user);
  
  React.useEffect(()=> {
    //impede que seja feito o dispatch 2x no início devido ao scroll estar para baixo
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head title='Minha Conta' descricao=''/>  
      <Feed user={dados && dados.id}/>
    </>
  )
}

export default MinhaConta