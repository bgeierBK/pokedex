import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <>
      <NavLink to="/" className="nav-link">
        National
      </NavLink>
      <NavLink to="/kanto" className="nav-link">
        Kanto
      </NavLink>
      <NavLink to="/johto" className="nav-link">
        Johto
      </NavLink>
      <NavLink to="/hoenn" className="nav-link">
        Hoenn
      </NavLink>
      <NavLink to="/sinnoh" className="nav-link">
        Sinnoh
      </NavLink>
      <NavLink to="/unova" className="nav-link">
        Unova
      </NavLink>
      <NavLink to="/kalos" className="nav-link">
        Kalos
      </NavLink>
      <NavLink to="/alola" className="nav-link">
        Alola
      </NavLink>
      <NavLink to="/galar" className="nav-link">
        Galar
      </NavLink>
      <NavLink to="/paldea" className="nav-link">
        Paldea
      </NavLink>
    </>
  );
}
export default NavBar;
