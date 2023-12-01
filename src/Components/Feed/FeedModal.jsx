import React from 'react';
import style from './FeedModal.module.css';
import Comments from './Comments/Comments';
import Skeleton from '../../Helper/Skeleton';
import Carregando from '../../Helper/Carregando';
import Error from '../../Helper/Erro';
import { useDispatch, useSelector } from 'react-redux';
import  { closeModal } from '../../store/reducers/getPhoto';

const FeedModal = ({classe}) => {
  const {carregando, dados, erro} = useSelector((state)=> state.photo);
  const {modal} = useSelector((state)=> state.photo)
  const dispatch = useDispatch();


  function handleModal (event) {
    if(event.target === event.currentTarget) dispatch(closeModal());
  }

  if(!modal) return null;
  if(carregando) return <Carregando/>
  if(erro) return <Error mensagem={erro} telaInteira={true}/>

  return (
    <div className={classe || style.modalPhoto} onClick={handleModal}>
      <div className={style.photo}>
        <Skeleton src={dados && dados.photo.src} alt={dados && dados.photo.title}/>
        <Comments/>
      </div>
    </div>
  )
}

export default FeedModal;