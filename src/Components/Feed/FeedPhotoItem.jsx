import React from 'react';
import style from './FeedPhotoItem.module.css';
import Skeleton from '../../Helper/Skeleton';
import { useDispatch } from 'react-redux';
import { getPhotoItem, openModal } from '../../store/reducers/getPhoto';

const FeedPhotoItem = ({photo}) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(getPhotoItem(photo.id));
  }

  return (
      <li className={style.photo} onClick={handleClick}>
        <Skeleton src={photo.src} alt={photo.title} /> 
        <div className={style.visualiza}>{photo.acessos}</div>
      </li>
  )
}

export default FeedPhotoItem;