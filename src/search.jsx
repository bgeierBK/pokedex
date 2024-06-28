import { useState, useEffect } from 'react';
import './App.css';

function Search({ onSearch, onTypeFilter, types }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const handleSearchChange = event => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleTypeChange = event => {
    const type = event.target.value;
    setSelectedType(type);
    onTypeFilter(type);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon by Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select
        value={selectedType}
        onChange={handleTypeChange}
        className="type-filter"
      >
        <option value="all">All Types</option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Search;
