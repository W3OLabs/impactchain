import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { CiSearch } from "react-icons/ci";
import SubmitData from "./data-submission/SubmitData";
import { setDataComponent, setShowDataForm, setUserRecord } from "../redux/slices/app";
import { useAuth } from "../hooks/AppContext";
import { isDataIncomplete } from "./utils";
import { ImpactTarget, UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

const Header = () => {
  const { 
    showDataForm,
     userInfo } = useSelector((state: RootState) => state.app);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const loginMenuRef = useRef<HTMLDivElement>(null);
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();
  
  const {dataActor} = useAuth();

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

  

  useEffect(() => {
    const getOnChainData = async () => {
      try {
        const res = await dataActor?.getUserRecord(userInfo.email);
        if (res) {
          if ("ok" in res) {
            const convertedImpactTargets: ImpactTarget[] = res.ok.impactTargets.map(targetArray => 
              targetArray.map(target => ({
                ...target,
                id: Number(target.id),
              }))
            );
            
            const convertedUserRecord: UserRecord = {
              ...res.ok,
              impactTargets: [convertedImpactTargets],
            };
            dispatch(setUserRecord(convertedUserRecord));
            const _res = isDataIncomplete(res.ok);
             if (_res !== "ok") {
              console.log("Data is incomplete", _res);
              dispatch(setShowDataForm(true));
              dispatch(setDataComponent(_res));
            }
          } else {
            dispatch(setShowDataForm(true));
            dispatch(setDataComponent("About"));
          }
        }
      } catch (error) {
        console.log("Error getting on chain data", error);
      }
    };

    if (userInfo && dataActor) {
      getOnChainData();
    }
  }, [dataActor, userInfo, dispatch]);

  return (
    <>
      {showDataForm && <SubmitData />}
      <div className="pt-5">
        <div className="h-5 flex items-center justify-end bg-custom-gray mx-10 py-10 rounded-xl border border-green-700">
          <div className="flex items-center justify-between gap-5">
            <Link to="/askai">
              <img src="/smiley.svg" alt="logo" className="h-10 w-10" />
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
