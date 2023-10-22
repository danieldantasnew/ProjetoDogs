import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import style from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import Carregando from '../../Helper/Carregando';
import Erro from '../../Helper/Erro';

const FeedPhotos = ({setModalPhoto}) => {
  const [photos, setPhotos] = React.useState(null);
  const {carregando, erro, request, data} = useFetch();

  React.useEffect(()=> {
    async function photoFetch() {
      const {url, options} = PHOTOS_GET({page: 1, user: 0, total: 6});
      const { response, json } = await request(url, options);
      setPhotos(json);
    }
    photoFetch();
  }, [request]);

  if(carregando) return <Carregando />
  if(erro) return <Erro telaInteira={true}/>

  return (
    <ul className={`${style.Feed} container animationLeft`}>
    {photos && photos.map((photo) => <FeedPhotoItem key={photo.id} photo={photo} acessos={photo.acessos} titulo={photo.title} setModalPhoto={setModalPhoto}/>)}
  </ul>
  )
}

export default FeedPhotos;