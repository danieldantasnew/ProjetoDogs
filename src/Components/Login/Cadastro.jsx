import React from 'react'
import H1 from '../Form/H1';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { useValidate } from '../../Hooks/useValidate';
import Head from '../../Helper/Head';
import {USER_POST} from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Erro from '../../Helper/Erro';

const CriarConta = () => {
  
  const {userLogin, loading} = React.useContext(UserContext);
  const username = useValidate('');
  const validaEmail = useValidate('email');
  const validaSenha = useValidate('password');
  const { carregando, erro, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({username: username.dado, email: validaEmail.dado, password: validaSenha.dado});
    

    if(username.validate() && validaEmail.validate() && validaSenha.validate()) {
      const {response} = await request(url, options);
      if(response.ok) {
        await userLogin({username: username.dado, password: validaSenha.dado});
      }
    }
  }

  return (
    <form className='animationLeft' onSubmit={handleSubmit}>
      <Head title='Cadastro' descricao='Realize o seu cadastro.'/>
      <H1 title='Cadastre-se'></H1>
      <Input nome='Usuário' tipo='text'{...username}/>
      <Input nome='E-mail' tipo='email' {...validaEmail}/>
      <Input nome='Senha' tipo='password' {...validaSenha}/>
      {loading ? <Button disabled nome='Carregando...'/> : carregando ? 
      <Button disabled nome='Cadastrando...'/> : 
      <Button nome='Cadastrar'/> }
      {erro && <Erro mensagem={erro} />}
    </form>
  )
}

export default CriarConta;