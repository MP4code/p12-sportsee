import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar" aria-label="Navigation principale">
        <NavLink className="navbar_logo" to="/">
          <img src={logo} alt="Logo de l'application" />
        </NavLink>

        <ul className="navbar_links">
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/reglages">Réglages</NavLink>
          </li>
          <li>
            <NavLink to="/communaute">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
