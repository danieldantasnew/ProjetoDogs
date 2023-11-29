import React from 'react';
import H1 from '../Form/H1';
import Input from '../Form/Input';
import Button from '../Form/Button';
import {useValidate} from '../../Hooks/useValidate'
import { RESET_PASSWORD } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Erro from '../../Helper/Erro';
import { useNavigate } from 'react-router-dom';

const LoginReset = () => {

  const senha = useValidate('password');
  const { erro, request} = useFetch();
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const parametros = new URLSearchParams(window.location.search)
    const key = parametros.get('key');
    const login = parametros.get('login')
    const {url, options} = RESET_PASSWORD({login, key, password: senha.dado});
    const {response} = await request(url, options);
    if(response.ok) navigate('/login');
  }

  return (
    <section>
      <H1 title='Resete a Senha'/>
      <form onSubmit={handleSubmit}>
        <Input nome='Nova Senha' tipo='password' {...senha}/>
        <Button nome='Alterar Senha'/>
        {erro && <Erro mensagem={erro}/>}
      </form>
    </section>
  )
}

export default LoginReset