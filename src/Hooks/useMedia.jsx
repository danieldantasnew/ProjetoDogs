import React from 'react'

const useMedia = (tamanho) => {

  const [match, setMatch] = React.useState(null);

  React.useEffect(()=> {

    function handleSize(){
      const {matches} = window.matchMedia(tamanho);
      setMatch(matches);
    }
    handleSize();

    window.addEventListener('resize', handleSize);

    return ()=> {
      window.removeEventListener('resize', handleSize);
    }
  }, [tamanho]);

  return match;
}

export default useMedia;