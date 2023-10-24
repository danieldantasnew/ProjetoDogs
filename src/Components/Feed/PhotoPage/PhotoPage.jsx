import React from 'react';
import { useParams } from 'react-router-dom';
import FeedModal from '../FeedModal';
import style from './PhotoPage.module.css';

const PhotoPage = () => {
    const params = useParams();

  return (
    <FeedModal photoID={Number(params.id)} classe={`${style.photopage} container`}/>
  )
}

export default PhotoPage