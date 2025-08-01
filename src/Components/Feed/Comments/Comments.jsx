import React from 'react';
import style from '../Comments/Comments.module.css';
import H1 from '../../Form/H1';
import {ReactComponent as Dog} from '../../../../public/Assets/enviar.svg';
import { COMMENT_POST } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import Erro from '../../../Helper/Erro';
import PhotoDelete from './PhotoDelete';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Comments = () => {

  const {dados} = useSelector((state)=> state.login.token);
  const dataUser = useSelector((state)=> state.login.user);
  const comentarios = useSelector((state)=> state.photo.dados);
  const [comentario, setComentario] = React.useState('');
  const [allComents, setAllComments] = React.useState([]); 
  const {erro, request} = useFetch();
  const commentRef = React.useRef();

  React.useEffect(()=>{
    if(comentarios) {
      setAllComments(comentarios.comments);
      commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }
  }, [comentarios]);

  React.useEffect(()=>{
    if(allComents && commentRef.current) {
      commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }
  }, [allComents]);


  async function handleClick(event) {
    event.preventDefault();
    const {id} = comentarios.photo;
    const {url, options } = COMMENT_POST(id, {comment: comentario}, dados.token);
    const {response, json} = await request(url, options)
    if(response.ok) {
      setComentario('');
      setAllComments([...allComents, json]);
    }
  }
  
  return (
    <form className={`${style.comments}`} onSubmit={handleClick}>
      {comentarios && <>
        <div className={`${style.detalhes}  animationLeft`}>
        <div className={style.cabecalho}>
          {<>
            {dataUser.dados ? 
            (dataUser.dados.username === comentarios.photo.author) ?      
              <PhotoDelete idPhoto={comentarios.photo}/>: 
              <Link to={`/perfil/${comentarios.photo.author}`}><span className={style.autor}>@{comentarios.photo.author}</span></Link> 
              : 
              <Link to='/perfil/'><span className={style.autor}>@{comentarios.photo.author}</span></Link>}
            <span className={style.visualizacao}>{comentarios.photo.acessos}</span>
          </>}
        </div>
        {<Link to={`/foto/${comentarios.photo.id}`}><H1 title={comentarios.photo.title}/></Link>}
        {<div className={style.idadePeso}>
          <span>{comentarios.photo.peso} Kg</span>
          <span>{comentarios.photo.idade} {comentarios.photo.idade == 1 ? 'ano' : 'anos'}</span>
        </div>}
      </div>
      <ul className={style.commentsUsers} ref={commentRef}>
        {allComents.length == 0 ? 'Sem comentários': allComents.map((comentario)=> 
          <li key={comentario.comment_ID}>
            <div><span>{comentario.comment_author}:</span> {comentario.comment_content}</div>
          </li>
        )}
      </ul>
      {dataUser.dados && 
        <div className={style.inputComment}>
          <label htmlFor="comentario">
            <textarea id='comentario' 
              placeholder='Comente...'
              value={comentario}
              onChange={({target})=> setComentario(target.value)}
              />
          </label>
          <button><Dog/></button>
        </div>}
      </>}
      <Erro mensagem={erro}/>
    </form>
  )
}

export default Comments