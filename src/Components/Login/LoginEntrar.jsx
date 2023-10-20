import React from 'react';
import style from './LoginEntrar.module.css';
import H1 from '../Form/H1';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { Link } from 'react-router-dom';
import { useValidate } from '../../Hooks/useValidate';
import { UserContext } from '../../UserContext';
import Head from '../../Helper/Head';
import Erro from '../../Helper/Erro';

const LoginEntrar = () => {
  const username = useValidate('');
  const userPassword = useValidate('');
  const { userLogin, erro, setErro, loading } = React.useContext(UserContext);

  React.useEffect(()=> {
    if(erro){
      setTimeout(()=>{
        setErro('');
      }, 4000);
    }
  }, [erro, setErro]);

  function handleSubmit(event){
    event.preventDefault();
    if(username.validate() && userPassword.validate()){
      userLogin({
        username: username.dado, 
        password: userPassword.dado
      });
    }
  }

  return (
    <form className={`${style.allInfo} animationLeft`} onSubmit={handleSubmit}>
      <Head title='Login' descricao='Login do usuário'/>
      <div className={style.infoLogin}>
        <H1 title='Login'/>
        <Input nome='Usuário' tipo='text' {...username}/>
        <Input nome='Senha' tipo='password' {...userPassword}/>
        {loading && loading ?
        <Button disabled nome='Carregando...'/> : 
        <Button nome='Entrar'/>}
        <Erro mensagem={erro}/>
      </div>
      <Link to='perdeusenha' className={style.perdeu}>Perdeu a Senha?</Link>
      <div className={style.cadastro}>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to='cadastro'><Button nome='Cadastro'/></Link>
      </div>
    </form>
  )
}

export default LoginEntrar;