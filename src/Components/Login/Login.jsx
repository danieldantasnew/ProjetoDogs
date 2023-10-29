import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import style from './Login.module.css';
import LoginEntrar from './LoginEntrar';
import Cadastro from './Cadastro';
import PerdeuSenha from './PerdeuSenha';
import Reset from './LoginReset';
import NotFound from '../../Helper/NotFound';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if(login === true) return <Navigate to='/conta' />

  return (
    <section className={style.login}>
      <div className={`${style.form}`}>
        <Routes>
          <Route path='/' element={<LoginEntrar/>}/>
          <Route path='cadastro' element={<Cadastro/>}/>
          <Route path='perdeuSenha' element={<PerdeuSenha/>}/>
          <Route path='reset' element={<Reset/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login;