import React from 'react';
import useFetch from '../../Hooks/useFetch';
import style from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';

import {useSelector} from 'react-redux';

const FeedPhotos = ({setModalPhoto}) => {
  const {list} = useSelector((state)=> state.feed);

  return (
    <ul className={`${style.Feed} container animationLeft`}>
      {list && list.map((photo) => (
        <FeedPhotoItem 
        key={photo.id} 
        photo={photo} 
        acessos={photo.acessos} 
        titulo={photo.title} 
        setModalPhoto={setModalPhoto}/>        
      ))}
    </ul>
  )
}

export default FeedPhotos;