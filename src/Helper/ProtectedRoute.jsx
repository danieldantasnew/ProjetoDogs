import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({children}) => {
  const {dados} = useSelector((state)=> state.login.user);

  // return login ? children : <Navigate to='/login' /> dessa forma o usuário irá para a página de login e ficará carregando e se o login for verdadeiro aí sim ele irá redirecionar para conta

  if(dados) {
    return children;
  }
  else if(!dados) {
    return <Navigate to='/login' />
  }
  else{
    <></>
  }
}

export default ProtectedRoute;