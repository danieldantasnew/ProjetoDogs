import React from 'react';
import Head from '../../Helper/Head';
import Carregando from '../../Helper/Carregando';
import Erro from '../../Helper/Erro';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { carregarNovasFotos, resetPhotos } from '../../store/reducers/feed';


const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const {infinite, list, carregando, erro} = useSelector((state)=> state.feed);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(resetPhotos());
    dispatch(carregarNovasFotos({user, total: 6}));
  }, [dispatch, user]);

  React.useEffect(()=> {
    let espere = false;
    function infiniteFunction() {
      if(infinite) {
        const heightScroll = window.scrollY;
        const height = (document.body.offsetHeight - window.innerHeight ) * 0.75;
  
        if(heightScroll > height && !espere ) {
          dispatch(carregarNovasFotos({user, total: 6}));
          espere = true;
          setTimeout(() => {
            espere = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteFunction);
    window.addEventListener('scroll', infiniteFunction);

    return () => {
      window.removeEventListener('wheel', infiniteFunction);
      window.removeEventListener('scroll', infiniteFunction);
    }
  }, [infinite, dispatch, user]);


  return (
    <div style={{marginTop: '2rem'}}>
      <Head title='Fotos' descricao='Página inicial, feed de fotos.'/>
      {modalPhoto && <FeedModal photoID={modalPhoto.id} setModalPhoto={setModalPhoto}/>}
      {list.length > 0 && <FeedPhotos setModalPhoto={setModalPhoto}/>}
      {carregando && <Carregando/>}
      {erro && <Erro/>}
      {!infinite && !user && <p style={{textAlign: 'center', padding: '2rem 0 4rem 0', color: 'var(--cor-fonte-footer)'}}>Não existem mais postagens.</p>}
    </div>
  )
};

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}

export default Feed;