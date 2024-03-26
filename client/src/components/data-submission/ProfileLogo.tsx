import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataComponent, setUserRecord } from "../../redux/slices/app";
import { RootState } from "../../redux/store";
import { useAuth } from "../../hooks/AppContext";
import { UserRecord } from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { uploadFile } from "../../config/storage/functions";

const ProfileLogo = () => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState<File | null>(null);
  const [logourl, setLogoUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { userRecord, storageInitiated } = useSelector(
    (state: RootState) => state.app
  );
  const { dataActor } = useAuth();

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0]);
      setLogoUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBack = () => {
    dispatch(setDataComponent("About"));
  };

  const handleNext = () => {
    dispatch(setDataComponent("ImpactTarget"));
  };

  const handleSubmit = async () => {
    if (userRecord) {
      try {
        setLoading(true);
        const url = await uploadAsset();
        if (!url) {
          console.error("Error uploading logo");
          return;
        }
        const updatedRecord: UserRecord = {
          ...userRecord,
          aboutCompany: { ...userRecord.aboutCompany, logo: [url] },
        };
        await dataActor?.updateUserRecord(updatedRecord);
        dispatch(setUserRecord(updatedRecord));
        dispatch(setDataComponent("ImpactTarget"));
      } catch (error) {
        setLoading(false);
        console.log("Error setting company info", error);

      }
    }
  };

  const uploadAsset = async () => {
    if (storageInitiated && logo) {
      const file_path = location.pathname;
      try {
        const assetUrl = await uploadFile(logo, file_path);
        console.log("This file was successfully uploaded:", logo.name, assetUrl);
        return assetUrl;
      } catch (error) {
        console.error("Error uploading file:", logo.name, error);
      }
    }
  };

  return (
    <div className="">
      <div className=""></div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
        Upload your company logo.
      </h3>
      <div className="flex justify-center">
        <div
          className={`${
            logourl ? "flex-col gap-5 p-5 min-w-[350px]" : "min-w-[300px]"
          } mt-10 min-h-[250px]  bg-black flex justify-center items-center rounded-3xl`}
        >
          {logourl && (
            <img
              src={logourl}
              alt="logo"
              className="h-40 w-40 object-cover rounded-full"
            />
          )}
          <div className="flex justify-center">
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleLogoChange}
              accept="image/*"
              className="hidden"
            />
            <button>
              {" "}
              <label
                htmlFor="logo"
                className="bg-custom-green text-white px-10 py-2 rounded-full cursor-pointer"
              >
                {logourl ? "Change Logo" : "Upload Logo"}
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20 mb-10 mx-20 ">
        <button onClick={handleBack}>
          <span className="text-custom-green">Back</span>
        </button>
        <button
          onClick={handleSubmit}
          disabled={!logo}
          className={` ${
            logourl ? "bg-custom-green" : "bg-green-700"
          } px-10 py-1.5  rounded-full text-black font-bold`}
        >
       {loading ? "Loading..." : "Save & Continue"}
        </button>
        <button onClick={handleNext}>
          <span className="text-custom-green">Skip</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileLogo;
