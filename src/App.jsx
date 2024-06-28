import { useState, useEffect } from 'react';
import './App.css';
import HomeCard from './HomeCard.jsx';
import Search from './search.jsx';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const batchSize = 50;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
      .then(res => res.json())
      .then(data => {
        const pokemonList = data.results;
        setPokemon(pokemonList);
        fetchPokemonDetailsInBatches(pokemonList);
      })
      .catch(err => console.error(err));
  }, []);

  const fetchPokemonDetailsInBatches = async pokemonList => {
    let allDetails = [];

    for (let i = 0; i < pokemonList.length; i += batchSize) {
      const batch = pokemonList.slice(i, i + batchSize);
      const fetchDetailsPromises = batch.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      );
      const batchDetails = await Promise.all(fetchDetailsPromises);
      allDetails = [...allDetails, ...batchDetails];
      setPokemonDetails(allDetails);
      setFilteredPokemon(allDetails);

      const types = new Set();
      allDetails.forEach(pokemon => {
        pokemon.types.forEach(type => types.add(type.type.name));
      });
      setPokemonTypes(Array.from(types));
    }
  };

  const handleSearch = searchTerm => {
    const filtered = pokemonDetails.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  const handleTypeFilter = type => {
    if (type === 'all') {
      setFilteredPokemon(pokemonDetails);
    } else {
      const filtered = pokemonDetails.filter(pokemon =>
        pokemon.types.some(t => t.type.name === type)
      );
      setFilteredPokemon(filtered);
    }
  };

  const mappedHomeCards = filteredPokemon.map(pokemon => {
    return <HomeCard key={pokemon.id} pokemon={pokemon} />;
  });

  return (
    <div className="App">
      <Search
        onSearch={handleSearch}
        onTypeFilter={handleTypeFilter}
        types={pokemonTypes}
      />

      <br></br>
      <br></br>
      <div className="inner-box">
        <div className="pokemon-list">{mappedHomeCards}</div>
      </div>
    </div>
  );
}

export default App;
