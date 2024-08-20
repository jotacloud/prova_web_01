import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitais, setCapitais] = useState({ maior: [], menor: [] });

  // Função para buscar os dados
  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
      const capital = await response.json();

      // Ordena os dados pela população
      const sortedcapital = capital.sort((a, b) => a.population - b.population);

      // Captura as capitais com menor e maior população
      const menorPopulacao = sortedcapital.slice(0, 2);  
      const maiorPopulacao = sortedcapital.slice(-2);

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
      <h2>Capitais com a maior população</h2>
      <ul>
        {capitais.maior.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      <h2>Capitais com a menor população</h2>
      <ul>
        {capitais.menor.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Questao03;


//utilizei ia em algumas partes do codigo para entender o funcionamento. :(