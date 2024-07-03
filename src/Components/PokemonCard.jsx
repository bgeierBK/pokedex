import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function PokemonCard({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const abilities = pokemon.abilities.map((ability, index) => (
    <div key={index}>{ability.ability.name}</div>
  ));

  return (
    <>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} alt={pokemon} />
      <div>{abilities}</div>
    </>
  );
}
export default PokemonCard;
