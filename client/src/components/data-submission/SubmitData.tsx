import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import ProfileLogo from "./ProfileLogo";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ImpactTarget from "./ImpactTarget";
import Measurements from "./Measurements";


const SubmitData= () => {

  const {dataComponent} = useSelector((state: RootState) => state.app);
  return (
    <div className="fixed z-20 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-gray-900 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8">
          <div className="flex">
            <div className="flex justify-start w-[100px]">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              {dataComponent === "Loading" && <Loading />}
              {dataComponent === "About" && <About />}
              {dataComponent === "ProfileLogo" && <ProfileLogo />}
              {dataComponent === "ImpactTarget" && <ImpactTarget />}
              {dataComponent === "Measurements" && <Measurements />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitData;
