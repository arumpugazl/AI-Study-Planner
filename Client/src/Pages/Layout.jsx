import Sidenav from "./Components/Sidenav";
import Topnav from "./Components/Topnav";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex bg-gray-900">
      <Sidenav />
      <div className="w-full ml-20 bg-gray-900 min-h-screen">
        <Topnav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
