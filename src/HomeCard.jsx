import { useState, useEffect } from 'react';
import './App.css';

function HomeCard({ pokemon }) {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="home-card">
      <p>
        {pokemon.id}: {capitalizeFirstLetter(pokemon.name)}
      </p>
    </div>
  );
}

export default HomeCard;
