import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import style from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import Carregando from '../../Helper/Carregando';
import Erro from '../../Helper/Erro';

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
  const [photos, setPhotos] = React.useState(null);
  const {carregando, erro, request} = useFetch();

  React.useEffect(()=> {
    async function photoFetch() {
      const total = 6;
      const {url, options} = PHOTOS_GET({page, user, total});
      const { response, json } = await request(url, options);
      setPhotos(json);
      if(response && response.ok && json.length < total) setInfinite(false);
    }
    photoFetch();
  }, [request, user, page, setInfinite]);

  if(carregando) return <Carregando />
  if(erro) return <Erro telaInteira={true}/>

  return (
    <ul className={`${style.Feed} container animationLeft`}>
    {photos && photos.map((photo) => <FeedPhotoItem key={photo.id} photo={photo} acessos={photo.acessos} titulo={photo.title} setModalPhoto={setModalPhoto}/>)}
  </ul>
  )
}

export default FeedPhotos;