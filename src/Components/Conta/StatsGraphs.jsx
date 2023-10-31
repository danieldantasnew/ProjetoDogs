import React from 'react';
import { VictoryPie, VictoryTheme, VictoryArea, VictoryChart } from 'victory';
import style from './StatsGraphs.module.css';

const StatsGraphs = ({data}) => {
  const [grafico, setGrafico] = React.useState([]);
  const [total, setTotal] = React.useState(null);
  
  React.useEffect(()=> {
    const graphs = data && data.map((item)=> {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    });
    setGrafico(graphs);

    setTotal(data && data.map(({acessos}) => Number(acessos)).reduce((acumulador, atual) => acumulador + atual, 0));
  }, [data]);


  return (
    <div className={`${style.graficos} animationLeft`}>
      <p>Acessos: {total}</p>
      <VictoryPie
        data={grafico} 
        animate={{
          duration: 500
        }} 
        theme={VictoryTheme.material}
        style={{
          data: {
            stroke: "#333", strokeWidth: 2
          },
          labels: {
            fontSize: 14, fill: "#333"
          }
        }}
        innerRadius={50}
        padding={{ top: 50, bottom: 50 }}
      />
      <VictoryChart>
        <VictoryArea 
        data={grafico}
        style={{data: {fill: "#fb1"}}}
        />
      </VictoryChart>
    </div>
  )
}

export default StatsGraphs