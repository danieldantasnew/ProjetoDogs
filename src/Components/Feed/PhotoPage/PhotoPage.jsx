import React from 'react';
import FeedModal from '../FeedModal';
import style from './PhotoPage.module.css';

const PhotoPage = () => {
  return (
    <FeedModal classe={`${style.photopage} container`}/>
  )
}

export default PhotoPage;