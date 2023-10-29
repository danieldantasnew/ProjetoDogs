import React from 'react';
import H1 from '../Form/H1';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { useValidate } from '../../Hooks/useValidate';
import Head from '../../Helper/Head';
import { LOST_PASSWORD } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Erro from '../../Helper/Erro';

const PerdeuSenha = () => {
  const login = useValidate();
  const [mensagem, setMensagem] = React.useState(null);
  const {erro, carregando, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if(login.validate()) {
      const {url, options} = LOST_PASSWORD({
        login: login.dado, 
        url: window.location.href.replace('perdeusenha', 'reset')});
      const { response, json } = await request(url, options);
      if(response.ok) setMensagem(json);
    }
  }

  return (
    <form className='animationLeft' onSubmit={handleSubmit}>
      <Head title='Perdeu a senha' descricao='Recupere sua senha'/>
      <H1 title='Perdeu a senha?'/>
      {mensagem ? <p style={{fontSize: '18px', color: 'green'}}>{mensagem}</p> : <>
        <Input nome="Email / Usuário" tipo='text' {...login}/>
        {carregando ? <Button disabled nome='Enviar Email'/> : <Button nome='Enviar Email'/>}
        {erro && <Erro mensagem={erro}/>}
        </>} 
    </form>
  )
}

export default PerdeuSenha;