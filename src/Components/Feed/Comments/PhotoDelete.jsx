import React from 'react';
import style from './PhotoDelete.module.css';
import useFetch from '../../../Hooks/useFetch';
import { UserContext } from '../../../UserContext';
import { PHOTO_DELETE } from '../../../Api';

const PhotoDelete = ({idPhoto}) => {
  const {request} = useFetch();
  const {tokenUser} = React.useContext(UserContext);

  async function handleClick(event) {
    event.preventDefault();
    const confirmado = confirm('Deseja apagar essa postagem?');
    if(confirmado) {
      const {url, options} = PHOTO_DELETE(idPhoto.id, tokenUser);
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