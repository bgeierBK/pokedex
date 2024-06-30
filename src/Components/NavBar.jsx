import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <>
      <NavLink to="/">National</NavLink>
      <NavLink to="/kanto">Kanto</NavLink>
      <NavLink to="/johto">Johto</NavLink>
      <NavLink to="/hoenn">Hoenn</NavLink>
      <NavLink to="/sinnoh">Sinnoh</NavLink>
      <NavLink to="/unova">Unova</NavLink>
      <NavLink to="/kalos">Kalosl</NavLink>
      <NavLink to="/alola">Alola</NavLink>
      <NavLink to="/galar">Galar</NavLink>
      <NavLink to="/paldea">Paldea</NavLink>
    </>
  );
}
export default NavBar;
