import React from 'react';
import style from './FeedPhotoItem.module.css';

const FeedPhotoItem = ({photo, acessos, titulo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
      <li className={style.photo} onClick={handleClick}>
        <div style={{backgroundImage: `url(${photo.src})`}} aria-label={titulo} className={style.imagem}></div>
        <div className={style.visualiza}>{acessos}</div>
      </li>
  )
}

export default FeedPhotoItem;