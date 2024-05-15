import "./NavBar.css";
import { Link, useParams } from "react-router-dom";
import { ui_data } from "../../env/common_ui_metadata";
import { changeCategory, fetchImagesByTag } from "../../redux/slice/imageSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const NavBar = () => {
  const { navLinks } = ui_data;
  const { type } = useParams();
  console.log(type);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(changeCategory());
    dispatch(fetchImagesByTag({ tag: type, initialLoad: true }));
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
