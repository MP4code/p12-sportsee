import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import NavSide from "./NavSide";

const Header = () => {
  return (
    <div>
      <header className="header" aria-label="En-tête de l'application">
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
              <NavLink to="/profil/:id">Profil</NavLink>
            </li>
            <li>
              <NavLink to="/reglage">Réglages</NavLink>
            </li>
            <li>
              <NavLink to="/communaute">Communauté</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <NavSide />
    </div>
  );
};

export default Header;
