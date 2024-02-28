import { Outlet } from "react-router-dom";

import Sidebar from "./SideBar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="font-Poppins ">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <Navbar />
        <div className="px-4 py-5 md:px-10 mx-auto w-full relative">
          <div className="pt-5 md:pt-20 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
