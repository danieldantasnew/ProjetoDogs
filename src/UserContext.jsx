import React from 'react';
import {TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from './Api';

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {

  const [dataUser, setDataUser] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const [tokenUser, setTokenUser] = React.useState(null);

  React.useEffect(()=> {
    async function autoLogin(){
      const tokenLocal = localStorage.getItem('token');
      if(tokenLocal){
        try{
          setLoading(true);
          const {url, options} = TOKEN_VALIDATE_POST(tokenLocal)
          const validade = await fetch(url, options);
          if(!validade.ok) throw new Error('Token Inválido');
          await getUser(tokenLocal);
          setTokenUser(tokenLocal);
         }
         catch(erro){
          userLogout();
        }
        finally{
          setLoading(false);
        }
      }
      else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    setLoading(true);
    const {url, options} = USER_GET(token);
    const user = await fetch(url, options);
    const userJson = await user.json();
    setDataUser(userJson);
    setLogin(true);
    setLoading(false);
  }

  async function userLogin(body){
    try {
      setErro(null);
      setLoading(true);
      const {url, options} = TOKEN_POST(body);
      const dados = await fetch(url, options)
      if(!dados.ok) throw new Error('Usuário incorreto ou não existe.');
      const {token}= await dados.json();
      localStorage.setItem('token', token);
      setTokenUser(token);
      await getUser(token);
    }
    catch(erro){
      setErro(erro.message);
      setLogin(false);
    }
    finally{
      setLoading(false);
    }
  }

  async function userLogout(){
    setLoading(false);
    setLogin(false);
    setDataUser(null);
    setErro(null);
    localStorage.removeItem('token');
  }

  return (
    <UserContext.Provider value={{userLogin, userLogout, dataUser: dataUser, login, erro, loading, setErro, tokenUser: tokenUser }}>
      {children}
    </UserContext.Provider>
  )
}