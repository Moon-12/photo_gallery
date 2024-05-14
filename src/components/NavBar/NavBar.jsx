import "./NavBar.css";
import { Link, useParams } from "react-router-dom";
import { ui_data } from "../../env/common_ui_metadata";
import { fetchImagesByTag } from "../../redux/slice/imageSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const NavBar = () => {
  const { navLinks } = ui_data;
  const { type } = useParams();
  console.log(type);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesByTag(type));
  }, [type]);

  return (
    <nav className="nav-container">
      {navLinks.map((ele) => {
        return (
          <Link key={ele.url} to={ele.url}>
            {ele.content}
          </Link>
        );
      })}
    </nav>
  );
};
export default NavBar;
