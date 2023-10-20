import React from 'react';
import style from './Footer.module.css'
import {ReactComponent as Dogs} from '../../../public/Assets/dogs.svg'

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer;