import React from 'react';
import style from './FeedModal.module.css';
import { PHOTO_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Comments from './Comments/Comments';
import Skeleton from '../../Helper/Skeleton';
import Carregando from '../../Helper/Carregando';
import Error from '../../Helper/Erro';

const FeedModal = ({photo, setModalPhoto}) => {
  const { setErro, erro, carregando, request} = useFetch();
  const [photoData, setPhotoData] = React.useState(null);

  React.useEffect(()=> {
    async function fetchImagem() {
      const {url, options} = PHOTO_GET(photo.id);
      const { json } = await request(url, options);
      setPhotoData(json);
    }
    fetchImagem();
  },[photo, request]);

  function handleModal (event) {
    if(event.target === event.currentTarget) setModalPhoto(null);
  }

  if(carregando) return <Carregando/>
  if(erro) return <Error mensagem={erro} telaInteira={true} setErro={setErro} setModalPhoto={setModalPhoto}/>

  return (
    <div className={style.modalPhoto} onClick={handleModal}>
      <div className={style.photo}>
        <Skeleton src={photoData && photoData.photo.src} alt={photoData && photoData.photo.title}/>
        <Comments comentarios={photoData}/>
      </div>
    </div>
  )
}

export default FeedModal;