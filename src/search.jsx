import { useState, useEffect } from 'react';
import './App.css';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokemon by Name"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default Search;
