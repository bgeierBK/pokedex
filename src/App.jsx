import { useState, useEffect } from 'react';
import './App.css';
import HomeCard from './HomeCard.jsx';
import Search from './search.jsx';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const itemsPerPage = 1025;
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
    }
  };

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage); // Calculate total pages based on filteredPokemon

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleSearch = searchTerm => {
    const filtered = pokemonDetails.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPokemon.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const mappedHomeCards = currentItems.map(pokemon => {
    return <HomeCard key={pokemon.id} pokemon={pokemon} />;
  });

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="container">
        <div className="pokemon-list">{mappedHomeCards}</div>
        <div className="pagination"></div>
      </div>
    </>
  );
}

export default App;
