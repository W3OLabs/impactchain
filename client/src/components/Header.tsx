import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { CiSearch } from "react-icons/ci";
import SubmitData from "./data-submission/SubmitData";

const Header = () => {
const {showDataForm} = useSelector((state: RootState) => state.app);
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
   {showDataForm && <SubmitData />}
    <div className="pt-5">
      <div className="h-5 flex items-center justify-end bg-custom-gray mx-10 py-10 rounded-xl border border-green-700">
        <div className="flex items-center justify-between gap-5">
          <Link to="/askai">
            <img
              src="/smiley.svg"
              alt="logo"
              className="h-10 w-10"
            />
          </Link>
          <button className="flex items-center gap-12 bg-custom-green text-black py-1 rounded-full px-5 mr-5">
            <span>Search</span>
            <CiSearch size={18} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
