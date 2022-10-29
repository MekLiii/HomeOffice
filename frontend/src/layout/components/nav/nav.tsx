import { Link } from "react-router-dom";
import { StyledNav, NavItems, Category, Searchbar, Login } from "./style";
import { Logo } from "./index";

const Nav = () => {
  const categories = [
    {
      name: "Accesorios",
      link: "categories/accesorios",
    },
    {
      name: "Gadgets",
      link: "categories/gadgets",
    },
  ];
  return (
    <StyledNav>
      <NavItems>
        <Link to={"/home"}>
          <img src={Logo} alt="Home Office shop logo" />
        </Link>
        <Category>
          {categories.map((category) => (
            <li key={category.name}>
              <Link to={category.link}>{category.name}</Link>
            </li>
          ))}
        </Category>
        <Searchbar>
          <input type="text" placeholder="Search for item" />
          <Login>
            <Link to="/login">Login</Link>
            <Link to="/login">cart</Link>
          </Login>
        </Searchbar>
      </NavItems>
    </StyledNav>
  );
};
export default Nav;
