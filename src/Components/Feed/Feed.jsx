import React from 'react';
import Head from '../../Helper/Head';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';


const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  let espere = false;

  React.useEffect(()=> {
    
    function infiniteFunction() {
      if(infinite) {
        const heightScroll = window.scrollY;
        const height = (document.body.offsetHeight - window.innerHeight ) * .75;
  
        if(heightScroll > height && !espere ) {
          setPages((pages)=> [...pages, pages.length + 1]);
          // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map((pagina)=> 
      <FeedPhotos 
        setModalPhoto={setModalPhoto}
        setInfinite={setInfinite} 
        key={pagina}
        page={pagina}
        user={user}
      />)}
      {!infinite && <p style={{textAlign: 'center', padding: '2rem 0 4rem 0', color: 'var(--cor-fonte-footer)'}}>Não existem mais postagens.</p>}
    </div>

  )
}

export default Feed