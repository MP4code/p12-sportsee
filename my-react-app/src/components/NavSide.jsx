import detente from "../assets/detente.png";
import { NavLink } from "react-router-dom";
import altere from "../assets/altere.png";
import nage from "../assets/nage.png";
import velo from "../assets/velo.png";

const NavSide = () => {
  return (
    <div>
      <nav className="navside" aria-label="Navigation secondaire">
        <div className="navsideIcons">
          <NavLink to="/">
            <img src={detente} alt="Detente" />
          </NavLink>
          <NavLink to="/">
            <img src={altere} alt="Altere" />
          </NavLink>
          <NavLink to="/">
            <img src={nage} alt="Nage" />
          </NavLink>
          <NavLink to="/">
            <img src={velo} alt="Velo" />
          </NavLink>
        </div>
        <div className="navsideCopyright">
          <p>Copiryght, SportSee 2020</p>
        </div>
      </nav>
    </div>
  );
};

export default NavSide;
