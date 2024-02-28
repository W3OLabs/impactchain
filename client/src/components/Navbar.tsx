import { useEffect, useRef, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const Navbar = () => {
    const {isAuthenticated} = useSelector((state: RootState) => state.app);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const loginMenuRef = useRef<HTMLDivElement>(null);
  const [userMenu, setUserMenu] = useState(false);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenu(false);
      }
      if (
        loginMenuRef.current &&
        !loginMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef, loginMenuRef]);
  return (
    <>
      <nav className="md:flex absolute border-b bg-cyan-50 top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start hidden items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-cyan-700 font-graphikBold hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Impact Chain
          </a>
          {/* Form */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap gap-5 items-center">
                <button className="p-2 rounded-lg border hover:bg-cyan-200 bg-cyan-100">
                  <IoMdNotificationsOutline size={20} />
                </button>
                <div className="flex justify-center" ref={userMenuRef}>
                  <div className="relative">
                    <button
                      onClick={() => setUserMenu(!userMenu)}
                      className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="https://eu.ui-avatars.com/api/?name=John&size=1000"
                        alt="avatar"
                      />
                    </button>

                    {userMenu && (
                      <div className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                        <Link
                          to="/profile"
                          className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-cyan-500 hover:text-white"
                        >
                          Profile
                        </Link>
                        <div className="py-2">
                          <hr></hr>
                        </div>
                        <button
                          onClick={() => {
                            setUserMenu(false);
                            // logout();
                            window.location.reload();
                          }}
                          className="transition-colors w-full text-start duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-cyan-500 hover:text-white"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;