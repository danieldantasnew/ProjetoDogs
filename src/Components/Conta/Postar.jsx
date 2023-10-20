import React from 'react';
import style from './Postar.module.css';
import Input from '../Form/Input';
import {useValidate} from '../../Hooks/useValidate';
import Button from '../Form/Button';
import Head from '../../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../Api';
import Erro from '../../Helper/Erro';
import { useNavigate } from 'react-router-dom';

const Postar = () => {
  const username = useValidate();
  const userPeso = useValidate();
  const userIdade = useValidate();
  const [enviado, setEnviado] = React.useState(false);
  const [imagem, setImagem] = React.useState({});
  const {data, carregando, erro, request} = useFetch();
  const navigate = useNavigate();
  const tempo = 600;
 
  React.useEffect(() => {
    if(data !== null) {
      setTimeout(()=> {
        navigate('/conta');
      }, tempo);
    }
  }, [data, navigate]);

  function handleImgChange({target}) {
    setImagem({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(username.validate() && userPeso.validate() && userIdade.validate()) {
      const formData = new FormData();
      formData.append('img', imagem.raw)
      formData.append('nome', username.dado)
      formData.append('peso', userPeso.dado)
      formData.append('idade', userIdade.dado)

      const token = localStorage.getItem('token');
      const {url, options} = PHOTO_POST(formData, token); 
      const { response } = await request(url, options);
      if(response.ok) {
        setEnviado(true);
        setTimeout(()=> {
          setEnviado(false);
        }, tempo);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${style.sectionPhoto} animationLeft`} style={{marginTop: '2rem'}}>
      <div>
        <Head title='Poste sua foto' descricao=''/>
        <Input nome='Nome' tipo='text' {...username} />
        <Input nome='Peso (Kg)' tipo='number' {...userPeso} />
        <Input nome='Idade' tipo='number' {...userIdade} />
        <input type="file" name="img" id="img" style={{marginTop: '1rem', display: 'block', fontSize: '1rem'}}
        onChange={handleImgChange}
        />
        {enviado ? <Button disabled nome='Postado!' style={{opacity: 1}}/> : carregando ? <Button disabled nome='Postando...'/> : <Button nome='Postar'/>}
        {erro && <Erro mensagem={erro}/>}
      </div>
      {imagem.preview && <div className={style.imagemPost} style={{backgroundImage: `url(${imagem.preview})`}}></div>}
    </form>
  )
}

export default Postar;