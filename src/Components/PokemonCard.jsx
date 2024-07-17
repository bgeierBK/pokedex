import React, { useState, useEffect } from 'react';
import '../App.css';

function PokemonCard({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }
  const backgroundColor = typeColors[pokemon.types[0].type.name];
  const abilities = pokemon.abilities.map((ability, index) => (
    <li key={index}>{capitalizeFirstLetter(ability.ability.name)}</li>
  ));

  return (
    <div className="pokemon-card" style={{ backgroundColor }}>
      <div className="pokemon-card-content">
        <div>
          <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
        </div>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{ width: '200px', height: '200px' }}
          className="pokemon-image"
        />
        <h3>Abilities:</h3>
        <div>{abilities}</div>
      </div>
    </div>
  );
}
export default PokemonCard;
