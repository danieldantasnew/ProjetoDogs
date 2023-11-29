import React from 'react';
import Head from '../../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../Api';
import Carregando from '../../Helper/Carregando';
import Erro from '../../Helper/Erro';
import { useSelector } from 'react-redux';
const StatsGraphs = React.lazy(()=> import('./StatsGraphs'));


const Stats = () => {
  const {dados} = useSelector((state)=> state.login.token);
  const {data, erro, carregando, request} = useFetch();

  React.useEffect(()=>{
    async function fetchStats() {
      const {url, options} = GET_STATS(dados.token);
      await request(url, options);
    }
    fetchStats()
  },[dados, request]);

  if(carregando) return <Carregando/>
  if(erro) return <Erro mensagem={erro} />

  return (
    <React.Suspense fallback={<></>}>
      <Head title='Estatísticas' descricao='Estatísticas'/>
      <StatsGraphs data={data} />
    </React.Suspense>
  )
}

export default Stats;