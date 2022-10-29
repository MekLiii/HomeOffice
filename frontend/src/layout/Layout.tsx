import { useEffect } from "react";
import { Nav } from "./index";
import { Outlet } from "react-router-dom";
import { Mainbar, ChildrenWrapper } from "./style";
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
      <ChildrenWrapper>
        <Outlet />
      </ChildrenWrapper>
    </Mainbar>
  );
};

export default Layout;
