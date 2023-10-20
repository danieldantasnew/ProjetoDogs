import React from 'react';
import style from './FeedPhotoItem.module.css';
import Skeleton from '../../Helper/Skeleton';

const FeedPhotoItem = ({photo, acessos, titulo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
      <li className={style.photo} onClick={handleClick}>
        <Skeleton src={photo.src} alt={titulo} /> 
        <div className={style.visualiza}>{acessos}</div>
      </li>
  )
}

export default FeedPhotoItem;