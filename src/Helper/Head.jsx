import React from 'react';

const Head = (props) => {

  React.useEffect(()=> {
    document.title = props.title + ' | Dogs';
    document.querySelector("meta[name='description']").setAttribute('content', props.descricao || '');
  }, [props]);

  return (
    <></>
  )
}

export default Head;