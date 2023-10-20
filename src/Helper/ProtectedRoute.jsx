import React from 'react';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {login} = React.useContext(UserContext);

  // return login ? children : <Navigate to='/login' /> dessa forma o usuário irá para a página de login e ficará carregando e se o login for verdadeiro aí sim ele irá redirecionar para conta

  if(login === true) {
    return children;
  }
  else if(login === false) {
    return <Navigate to='/login' />
  }
  else{
    <></>
  }
}

export default ProtectedRoute;