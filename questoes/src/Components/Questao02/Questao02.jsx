import { useState } from "react";

const Questao02 = () => {
  
  const [frente,setFrente] = useState(true)
  // imagens fronte e verso do pokemon gengar
  const gengarfrontImageUrl = 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif';
  const gengarbackImageUrl = 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif';
  
  //função para a negação do state para a inversão do lado.
  const virarPokemon = () => {
    setFrente(!frente)
  }

    // return com um ternario para a alteração do lado do pokemon. usei o onclick para chamar o evento.
    return (
        <div>
            <h2>Pokemon</h2>
            <img src={frente ? gengarfrontImageUrl : gengarbackImageUrl} alt="pokemon" />
            <br />
            <button onClick={virarPokemon}>mudar lado</button>
        </div>
    )
}

export default Questao02