import React from 'react';
import Head from '../../Helper/Head';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';


const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(()=> {
    let espere = false;
    function infiniteFunction() {
      if(infinite) {
        const heightScroll = window.scrollY;
        const height = (document.body.offsetHeight - window.innerHeight ) * 0.75;
  
        if(heightScroll > height && !espere ) {
          setPages((pages)=> [...pages, pages.length + 1]);
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
  }, [infinite]);

  return (
    <div style={{marginTop: '2rem'}}>
      <Head title='Fotos' descricao='Página inicial, feed de fotos.'/>
      {modalPhoto && <FeedModal photoID={modalPhoto.id} setModalPhoto={setModalPhoto}/>}
      {pages.map((pagina)=> 
      <FeedPhotos 
        setModalPhoto={setModalPhoto}
        setInfinite={setInfinite} 
        key={pagina}
        page={pagina}
        user={user}
      />)}
      {!infinite && !user && <p style={{textAlign: 'center', padding: '2rem 0 4rem 0', color: 'var(--cor-fonte-footer)'}}>Não existem mais postagens.</p>}
    </div>

  )
}

export default Feed