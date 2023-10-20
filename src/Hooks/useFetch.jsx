import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setErro(null);
      setCarregando(true);
      response = await fetch(url, options);
      json = await response.json();
      if(!response.ok) throw new Error(json.message);
    }
    catch (error){
      json = null;
      setErro(error.message);
    }

    finally {
      setData(json);
      setCarregando(false);
      return {
        response,
        json
      }
    }
  }, []);

  return {
    carregando,
    erro,
    data,
    setErro,
    request
  }
}

export default useFetch;