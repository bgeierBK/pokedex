import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h2>National Pokedex</h2>
      <Outlet />
    </div>
  );
}

export default App;
