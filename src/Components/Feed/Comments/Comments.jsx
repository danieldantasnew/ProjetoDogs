import React from 'react';
import style from '../Comments/Comments.module.css';
import H1 from '../../Form/H1';

const Comments = ({comentarios}) => {

  React.useEffect(()=> {
    console.log(comentarios)
  }, [comentarios])
  return (
    <div className={`${style.comments}`}>
      <div className={`${style.detalhes}  animationLeft`}>
        <div className={style.cabecalho}>
          {comentarios && <>
            <span className={style.autor}>@{comentarios.photo.author}</span>
            <span className={style.visualizacao}>{comentarios.photo.acessos}</span>
          </>}
        </div>
        {comentarios && <H1 title={comentarios.photo.title}/>}
        {comentarios && <div className={style.idadePeso}>
          <span>{comentarios.photo.peso} Kg</span>
          <span>{comentarios.photo.idade} {comentarios.photo.idade == 1 ? 'ano' : 'anos'}</span>
        </div>}
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Comments