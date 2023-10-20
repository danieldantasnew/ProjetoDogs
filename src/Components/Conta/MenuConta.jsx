import React from 'react';
import {ReactComponent as MinhaContaFoto} from '../../../public/Assets/feed.svg';
import {ReactComponent as StatsFoto} from '../../../public/Assets/estatisticas.svg';
import {ReactComponent as PostarFoto} from '../../../public/Assets/adicionar.svg';
import {ReactComponent as SairFoto} from '../../../public/Assets/sair.svg';
import { NavLink } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
import style from './MenuConta.module.css';
import {UserContext} from '../../UserContext';

const MenuConta = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout} = React.useContext(UserContext);

  function handleLogout(){
    userLogout();
  }

  return (
    <>
      {mobile &&  <button className={`${style.btnMobile} ${mobileMenu && style.btnMobileActive}`} onClick={()=> setMobileMenu(!mobileMenu)}/>}

      <nav className={`${mobile ? style.NavegacaoMenu : style.Navegacao} ${mobileMenu && style.NavegacaoMenuActive} animationLeft`}>
        <NavLink to='/conta' end>
          <MinhaContaFoto/>
          {mobile && mobileMenu && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='estatisticas'>
          <StatsFoto/>
          {mobile && mobileMenu && 'Estatisticas'}
        </NavLink>
        <NavLink to='postar'>
          <PostarFoto/>
          {mobile && mobileMenu && 'Adicionar Foto'}
        </NavLink>
        <NavLink to='/login' onClick={handleLogout}>
          <SairFoto/>
          {mobile && mobileMenu && 'Sair'}
        </NavLink>
      </nav>
    </>

  )
}

export default MenuConta;