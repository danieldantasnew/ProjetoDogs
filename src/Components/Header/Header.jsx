import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Dogs} from '../../../public/Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header = () => {

  const { dataUser } = React.useContext(UserContext);


  return (
    <div className={`${style.Header}`}>
      <nav className={`${style.Nav} container`}>
        <Link to="/" className= {style.Home}>
          <Dogs/>
        </Link>
        {dataUser ?  
        <Link to="/conta" className={style.Login}>{dataUser.username}</Link> :         
        <Link to="/login" className={style.Login}>Login / Criar</Link>}
      </nav>
    </div>
  )
}

export default Header;