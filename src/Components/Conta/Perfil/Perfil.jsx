import React from 'react'
import Feed from '../../Feed/Feed';
import H1 from '../../Form/H1';
import { useParams } from 'react-router-dom';

const Perfil = () => {

  const params = useParams();

  return (
      <div className={`container`}>
        <H1 title={params.user} estilo={{marginLeft: "1rem", textTransform: "capitalize"}}/>
        <Feed user={params.user}/>
      </div>
  )
}

export default Perfil;