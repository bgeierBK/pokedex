import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';


function App() {
  return (
    <div>
      <h2>Pokedex</h2>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
