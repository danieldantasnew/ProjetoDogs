import React from 'react';
import style from './Skeleton.module.css';

const Skeleton = ({src, alt, ...props}) => {

  const[skeleton, setSkeleton] = React.useState(true);

  function handleImage({target}) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.wrapper}>
      {skeleton && <div className={style.skeleton}></div>}
      <img src={src} alt={alt} {...props} onLoad={handleImage} className={style.imagem}/>
    </div>
  )
}

export default Skeleton;