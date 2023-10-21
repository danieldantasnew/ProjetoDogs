import React from 'react';
import style from '../Comments/Comments.module.css';
import H1 from '../../Form/H1';
import {UserContext} from '../../../UserContext';
import {ReactComponent as Dog} from '../../../../public/Assets/enviar.svg';

const Comments = ({comentarios}) => {

  const {login , dataUser} = React.useContext(UserContext);

  // React.useEffect(()=> {
  //   console.log(comentarios)
  //   console.log(dataUser)
  //   console.log(login)
  // }, [comentarios, dataUser, login])

  
  return (
    <div className={`${style.comments}`}>
      {comentarios && <>
        <div className={`${style.detalhes}  animationLeft`}>
        <div className={style.cabecalho}>
          {<>
            {login ? 
            (dataUser.username === comentarios.photo.author) ?      
              <button className={style.btnDelete}>Deletar</button>: 
              <span className={style.autor}>@{comentarios.photo.author}</span> 
              : 
              <span className={style.autor}>@{comentarios.photo.author}</span>}
            <span className={style.visualizacao}>{comentarios.photo.acessos}</span>
          </>}
        </div>
        {<H1 title={comentarios.photo.title}/>}
        {<div className={style.idadePeso}>
          <span>{comentarios.photo.peso} Kg</span>
          <span>{comentarios.photo.idade} {comentarios.photo.idade == 1 ? 'ano' : 'anos'}</span>
        </div>}
      </div>
      <div className={style.commentsUsers}>
        {comentarios.comments.length == 0 ? 'Sem comentários': comentarios.comments.map((comentario)=> 
          <div key={comentario.comment_ID}>
            <div><span>{comentario.comment_author}:</span> {comentario.comment_content}</div>
          </div>
        )}
      </div>
      {login && 
        <div className={style.inputComment}>
          <label htmlFor="comentario">
            <textarea id='comentario' placeholder='Comente...'/>
          </label>
          <Dog/>
        </div>}
      </>}
    </div>
  )
}

export default Comments