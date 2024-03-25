import React, { useState } from "react";
import { GoSingleSelect } from "react-icons/go";
import { useAuth } from "../../hooks/AppContext";
import { UserRecord } from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDataComponent, setUserRecord } from "../../redux/slices/app";
import { toast } from "react-toastify";

const About = () => {
  const dispatch = useDispatch();
  const { userInfo, userRecord } = useSelector((state: RootState) => state.app);
  const { dataActor } = useAuth();
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState(
    userRecord ? userRecord.aboutCompany.name : ""
  );
  const [companySize, setCompanySize] = useState(
    userRecord ? userRecord.aboutCompany.companySize : ""
  );
  const [industry, setIndustry] = useState(
    userRecord ? userRecord.aboutCompany.industry : ""
  );
  const [selectedButton, setSelectedButton] = useState("");

  const handleNext = () => {
    dispatch(setDataComponent("ProfileLogo"));
  };

  const handleSubmit = async () => {
    if (companyName === "" || companySize === "" || industry === "") {
      toast.error("Please fill in all fields"), { autoClose: 3000 };
      return;
    }

    setLoading(true);
    try {
      const data: UserRecord = {
        aboutCompany: {
          logo: [],
          name: companyName,
          companySize: companySize,
          industry: industry,
        },
        email: userInfo.email,
        impactTargets: [],
      };
      await dataActor?.addUserRecord(data);
      dispatch(setUserRecord(data));
      dispatch(setDataComponent("ProfileLogo"));
      setLoading(false);
    } catch (error) {
      console.log("Error setting company info", error);
    }
    setLoading(false);
  };

  return (
    <div className="text-white">
      {" "}
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
        Tell us about your company.
      </h3>
      <div className="min-h-96 px-32">
        <form action="" className="mt-10">
          <div className="mb-4 ">
            <input
              className="shadow placeholder-gray-500 text-white min-w-[300px] rounded-xl appearance-none border-2 border-green-500 w-full py-3.5 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="company-name"
              type="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
            />
          </div>
          <div className="mt-5">
            <h3>Company Industry</h3>
            <div className="relative mt-3">
              <select
                className="appearance-none shadow placeholder-white text-white min-w-[300px] rounded-xl border-2 border-green-500 w-full py-3.5 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                name="industry"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="agriculture">Agriculture</option>
                <option value="construction">Construction</option>
                <option value="education">Education</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <GoSingleSelect size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2>Company Size</h2>
            <div className="mt-4 flex items-center gap-3">
              <button
                className={` ${
                  selectedButton === "2-10" ? "bg-white" : "bg-custom-green"
                } py-1 px-4 rounded-xl text-black font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("2-10");
                  setCompanySize("2-10");
                }}
              >
                2-10
              </button>
              <button
                className={` ${
                  selectedButton === "10-25" ? "bg-white" : "bg-custom-green"
                } py-1 px-4 rounded-xl text-black font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("10-25");
                  setCompanySize("10-25");
                }}
              >
                10-25
              </button>
              <button
                className={` ${
                  selectedButton === "25-50" ? "bg-white" : "bg-custom-green"
                } py-1 px-4 rounded-xl text-black font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("25-50");
                  setCompanySize("25-50");
                }}
              >
                25-50
              </button>
              <button
                className={` ${
                  selectedButton === "50-100" ? "bg-white" : "bg-custom-green"
                } py-1 px-4 rounded-xl text-black font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("50-100");
                  setCompanySize("50-100}");
                }}
              >
                50-100
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-center mt-20 mb-10 ">
        <button
          onClick={handleSubmit}
          className="mx-32 px-10 py-1.5 bg-custom-green rounded-full text-black font-bold"
        >
          {loading ? "Loading..." : "Save & Continue"}
        </button>
        {userRecord && (
          <button
          onClick={handleNext}
          >
            <span className="text-custom-green mx-32">Next</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
