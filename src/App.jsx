import { useState, useEffect } from 'react'
import './App.css'
import HomeCard from './HomeCard.jsx'

function App() {
 
  const [pokemon, setPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data =>{
      const pokemonList = data.results;
      setPokemon(pokemonList)

      const fetchDetailsPromises = pokemonList.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
      )
      Promise.all(fetchDetailsPromises)
      .then(details => setPokemonDetails(details))
    })
    .catch(err => console.error(err))
}, [])

  console.log(pokemonDetails)

  const mappedHomeCards = pokemonDetails.map(pokemon =>{
   return <HomeCard key={pokemon.id} pokemon={pokemon}/>
  })


  return (
    <>
      {mappedHomeCards}
    </>
  )
}

export default App
