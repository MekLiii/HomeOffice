import { useEffect } from "react";
import { Nav } from "./index";
import { Outlet } from "react-router-dom";
import { Mainbar } from "./style";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  // const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <Mainbar>
      <Nav />
      <Outlet />
    </Mainbar>
  );
};

export default Layout;
