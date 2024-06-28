import { useState, useEffect } from 'react';
import './App.css';
import HomeCard from './HomeCard.jsx';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
      .then(res => res.json())
      .then(data => {
        const pokemonList = data.results;
        setPokemon(pokemonList);

        const fetchDetailsPromises = pokemonList.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        Promise.all(fetchDetailsPromises).then(details =>
          setPokemonDetails(details)
        );
      })
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(pokemonDetails.length / itemsPerPage);
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = pokemonDetails.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const mappedHomeCards = pokemonDetails.map(pokemon => {
    return <HomeCard key={pokemon.id} pokemon={pokemon} />;
  });

  return (
    <div className="container">
      <div className="pokemon-list">{mappedHomeCards}</div>
      <div className="pagination"></div>
    </div>
  );
}

export default App;
