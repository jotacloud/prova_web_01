import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  const [capitais, setCapitais] = useState({ maior: [], menor: [] });

  // Promise que retorna os dados de forma local
  const fetchLocalData = () => {
    return new Promise((resolve, reject) => {
      const data = [
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
      ];
      resolve(data);
    });
  };

  // Função para buscar e processar os dados usando async/await
  const fetchData = async () => {
    try {
      const data = await fetchLocalData();

      // Ordena os dados pela população
      const sortedData = data.sort((a, b) => a.population - b.population);

      // Captura as capitais com menor e maior população
      const menorPopulacao = sortedData.slice(0, 2);
      const maiorPopulacao = sortedData.slice(-2);

      // Atualiza o estado com as capitais selecionadas
      setCapitais({
        menor: menorPopulacao.map(item => item.capital[0]),
        maior: maiorPopulacao.map(item => item.capital[0]),
      });

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  // Executa o fetchData quando o componente é montado
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <hr />
      <h2>Capitais com menor população</h2>
      <ul>
        {capitais.menor.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      
      <h2>Capitais com maior população</h2>
      <ul>
        {capitais.maior.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questao04;

//utilizei ia em algumas partes do codigo para entender o funcionamento. :(
