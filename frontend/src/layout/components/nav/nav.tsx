import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Home
          </Link>
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
        {/* <li className="nav__item">
          <a href="/login" className="nav__link">
            Login
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default Nav;
