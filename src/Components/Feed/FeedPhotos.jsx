import React from 'react';
import style from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import {useSelector} from 'react-redux';

const FeedPhotos = () => {
  const {list} = useSelector((state)=> state.feed);

  return (
    <ul className={`${style.Feed} container animationLeft`}>
      {list && list.map((photo) => (
        <FeedPhotoItem 
        key={photo.id} 
        photo={photo} 
        />        
      ))}
    </ul>
  )
}

export default FeedPhotos;