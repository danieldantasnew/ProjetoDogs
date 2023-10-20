import React from 'react';
import style from './FeedModal.module.css';
import { PHOTO_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Comments from './Comments/Comments';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, erro, carregando, request} = useFetch();
  const [photoData, setPhotoData] = React.useState(null);

  React.useEffect(()=> {
    async function fetchImagem() {
      const {url, options} = PHOTO_GET(photo.id);
      const { json } = await request(url, options);
      setPhotoData(json);
      // console.log(json)
    }
    fetchImagem();
  },[photo, request]);

  function handleModal (event) {
    if(event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={style.modalPhoto} onClick={handleModal}>
      <div className={style.photo}>
        <div style={{backgroundImage: `url(${photoData && photoData.photo.src})`}} aria-label={photoData && photoData.photo.title} className={style.imagemModal}></div>
        <Comments comentarios={photoData}/>
      </div>
    </div>
  )
}

export default FeedModal;