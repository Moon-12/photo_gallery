import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link to={"images/mountain"}>Mountain</Link>
      <Link to={"images/beach"}>Beaches</Link>
      <Link to={"images/bird"}>Birds</Link>
      <Link to={"images/food"}>Food</Link>
    </nav>
  );
};
export default NavBar;
