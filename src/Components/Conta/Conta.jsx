import React from 'react';
import { Navigate, Route, Routes, useLocation} from 'react-router-dom';
import style from './Conta.module.css';
import H1 from '../Form/H1';
import MinhaConta from './MinhaConta';
import Stats from './Stats';
import Postar from './Postar';
import {UserContext} from '../../UserContext';
import MenuConta from './MenuConta';

const Conta = () => {
  const parametros = useLocation();
  const [nomeTitulo, setNomeTitulo] = React.useState('');
  const {login } = React.useContext(UserContext);

  React.useEffect(()=> {
    switch (parametros.pathname) {
      case '/conta/estatisticas' :
        setNomeTitulo('Estatísticas');
        break;
      case '/conta/postar':
        setNomeTitulo('Poste Sua Foto');
        break;
      default:
        setNomeTitulo('Minha Conta');
    }
  }, [parametros]);

  if(login === false) return <Navigate to='/login' />
  
  return (
      <div className={`${style.Conta}`}>
        <div className={style.headerConta}>
          {nomeTitulo && <H1 title={nomeTitulo}/>}
          <MenuConta/>
        </div>
        <Routes>
          <Route path='/' element={<MinhaConta/>}/>
          <Route path='estatisticas' element={<Stats/>}/>
          <Route path='postar' element={<Postar/>}/>
        </Routes>
      </div>  
  )
}

export default Conta;