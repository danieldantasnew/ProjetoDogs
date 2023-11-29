import React from 'react';
import {ReactComponent as MinhaContaFoto} from '../../../public/Assets/feed.svg';
import {ReactComponent as StatsFoto} from '../../../public/Assets/estatisticas.svg';
import {ReactComponent as PostarFoto} from '../../../public/Assets/adicionar.svg';
import {ReactComponent as SairFoto} from '../../../public/Assets/sair.svg';
import { NavLink, useParams } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
import style from './MenuConta.module.css';
import { logOut } from '../../store/reducers/login';
import { useDispatch } from 'react-redux';

const MenuConta = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const parametros = useParams();
  const dispatch = useDispatch();

  React.useEffect(()=>{
    setMobileMenu(false);
  }, [parametros])
  

  function handleLogout(){
    dispatch(logOut());
  }

  return (
    <>
      {mobile &&  <button className={`${style.btnMobile} ${mobileMenu && style.btnMobileActive}`} onClick={()=> setMobileMenu(!mobileMenu)}/>}

      <nav className={`${mobile ? style.NavegacaoMenu : style.Navegacao} ${mobile && mobileMenu && style.NavegacaoMenuActive} animationLeft`}>
        <li>
          <NavLink to='/conta' end>
            <MinhaContaFoto/>
            {mobile && mobileMenu && 'Minhas Fotos'}
          </NavLink>
        </li>
        <li>
          <NavLink to='estatisticas'>
            <StatsFoto/>
            {mobile && mobileMenu && 'Estatisticas'}
          </NavLink>
        </li>
        <li>
          <NavLink to='postar'>
            <PostarFoto/>
            {mobile && mobileMenu && 'Adicionar Foto'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' onClick={handleLogout}>
            <SairFoto/>
            {mobile && mobileMenu && 'Sair'}
          </NavLink>
        </li>
      </nav>
    </>

  )
}

export default MenuConta;