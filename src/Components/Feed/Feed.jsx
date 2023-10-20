import React from 'react';
import style from './Feed.module.css';
import Head from '../../Helper/Head';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';


const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <>
      <Head title='Fotos' descricao='Página inicial, feed de fotos.'/>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </>

  )
}

export default Feed