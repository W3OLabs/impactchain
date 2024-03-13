/*eslint-disable*/
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { IoCardOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import NotificationDropdown from "./NotificationDropdown";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { logout } from "../redux/slices/app";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [tab, setTab] = useState<string>("");
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutCall, { isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutCall({}).unwrap();
      dispatch(logout());

      navigate("/");
    } catch (error) {
      console.log("Error logging out", error);
    }
  };

  return (
    <>
      <nav className="md:left-0 md:block bg-custom-gray rounded-r-xl border-r border-r-green-600 border-r-0.5 text-white md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded  border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex justify-between items-center w-full md:flex-none">
            <Link
              className="md:block text-xl md:pb-2 text-white mr-0  font-bold p-4 px-0"
              to="/home"
            >
              <div className="flex items-center justify-center gap-2">
                <img src="/green-icon.svg" alt="logo" className="w-10 h-10" />
                <h4 className="text-2xl">
                  <span className="text-custom-green">impact.</span>chain
                </h4>
              </div>
            </Link>
            <button
              className="cursor-pointer md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setShowMenu(true)}
            >
              <TiThMenu size={30} className="text-white BF" />
            </button>
            {showMenu && (
              <div
                className={` fixed top-0 left-0 right-0 bottom-0 z-100 bg-black bg-opacity-70`}
              >
                <div className="absolute top-0 right-0 z-10 min-w-[200px] bg-cyan-700 px-5">
                  <button
                    className="text-xl pb-5 pt-3"
                    onClick={() => setShowMenu(false)}
                  >
                    <AiOutlineClose />
                  </button>
                  <ul className="list-none flex-1 items-center flex-col justify-end ">
                    <li>
                      <button
                        className={`font-normal text-[16px] mb-4`}
                        onClick={() => {
                          setShowMenu(false);
                          navigate("/home");
                        }}
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        className={`font-normal text-[16px] mb-4`}
                        onClick={() => {
                          setShowMenu(false);
                          navigate("/dashboard");
                        }}
                      >
                        Dashboard
                      </button>
                    </li>
                    <li>
                      <button
                        className={`font-normal text-[16px] mb-4`}
                        onClick={() => {
                          setShowMenu(false);
                          navigate("/analytics");
                        }}
                      >
                        Analytics
                      </button>
                    </li>
                    <li>
                      <button
                        className={`font-normal text-[16px] mb-4`}
                        onClick={() => {
                          setShowMenu(false);
                          navigate("/askai");
                        }}
                      >
                        Ask AI
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left text-4xl md:pb-2 text-white mr-0 inline-block whitespace-nowrap font-bold p-4 px-0"
                    to="/home"
                  >
                    {/* <img src={Logo} alt="logo" className="w-10 h-10" /> */}
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            <ul className="md:flex-col md:min-w-full flex gap-[20px] flex-col list-none">
              <li className="items-center">
                <Link
                  to="/home"
                  onClick={() => setTab("home")}
                  className={`
                     py-3   flex items-center gap-2 px-3  ${
                       tab === "home"
                         ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                         : "text-blueGray-700 hover:text-blueGray-500"
                     }
                 
                  `}
                >
                  <img
                    src="/user_icon.svg"
                    alt="user-icon"
                    className="w-7 h-7"
                  />
                  <span>User</span>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/dashboard"
                  onClick={() => setTab("dashboard")}
                  className={`
                     py-3   flex items-center gap-2 px-3  ${
                       tab === "dashboard"
                         ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                         : "text-blueGray-700 hover:text-blueGray-500"
                     }
                 
                  `}
                >
                  <img
                    src="/dash-icon.svg"
                    alt="dashboard-icon"
                    className="w-7 h-7"
                  />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/analytics"
                  onClick={() => setTab("analytics")}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "analytics"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img
                    src="/bar-chart.svg"
                    alt="analytics-icon"
                    className="w-7 h-7"
                  />

                  <span>Analytics</span>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/askai"
                  onClick={() => setTab("askai")}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "askai"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img
                    src="/smiley.svg"
                    alt="askai-icon"
                    className="w-7 h-17"
                  />
                  <span>Ask AI</span>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/carbon-credits"
                  onClick={() => setTab("carbon-credits")}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "carbon-credits"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img
                    src="/seedling.svg"
                    alt="carbon-credits-icon"
                    className="w-7 h-7"
                  />
                  <span>Carbon Credits</span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="mt-28 border-custom-green md:min-w-full" />

            <ul className="md:flex-col mt-5 md:min-w-full flex gap-[20px] flex-col list-none">
              <li className="items-center">
                <Link
                  to="/settings"
                  onClick={() => setTab("settings")}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "settings"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img
                    src="/Gear.svg"
                    alt="settings-icon"
                    className="w-7 h-7"
                  />
                  <span>Settings</span>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  to="/help"
                  onClick={() => setTab("help")}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "help"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img src="/help.svg" alt="help-icon" className="w-7 h-7" />
                  <span>Help</span>
                </Link>
              </li>
              <li className="items-center">
                <button
                  onClick={() => {
                    setTab("logout");
                    handleLogout();
                  }}
                  className={`
                   py-2 w-full flex items-center gap-2 px-3  ${
                     tab === "logout"
                       ? "text-black rounded-xl bg-custom-green hover:text-lightBlue-600"
                       : "text-blueGray-700 hover:text-blueGray-500"
                   }
        
                  `}
                >
                  <img
                    src="/Unlocked.svg"
                    alt="logout-icon"
                    className="w-7 h-7"
                  />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
