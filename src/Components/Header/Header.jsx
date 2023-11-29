import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Dogs} from '../../../public/Assets/dogs.svg';
import { useSelector } from 'react-redux';

const Header = () => {

  const header = useSelector((state)=> state.login.user.dados);

  return (
    <div className={`${style.Header}`}>
      <nav className={`${style.Nav} container`}>
        <Link to="/" className= {style.Home}>
          <Dogs/>
        </Link>
        {header ?  
        <Link to="/conta" className={style.Login}>{header.username}</Link> :         
        <Link to="/login" className={style.Login}>Login / Criar</Link>}
      </nav>
    </div>
  )
}

export default Header;