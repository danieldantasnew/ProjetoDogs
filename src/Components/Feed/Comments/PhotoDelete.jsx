import React from 'react';
import style from './PhotoDelete.module.css';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../../Api';
import { useSelector } from 'react-redux';

const PhotoDelete = ({idPhoto}) => {
  const {request} = useFetch();
  const {dados} = useSelector((state)=> state.login.token)

  async function handleClick(event) {
    event.preventDefault();
    const confirmado = confirm('Deseja apagar essa postagem?');
    if(confirmado) {
      const {url, options} = PHOTO_DELETE(idPhoto.id, dados.token);
      const {response, json } = await request(url, options)
      if(response.ok) {
       location.reload();
       alert(json); 
      }
    }
  }

  return (
    <button className={style.btnDelete} onClick={handleClick}>Deletar</button>
  )
}

export default PhotoDelete