import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-t from-black to-green-500 overflow-hidden flex-col flex items-center">
      <img
        className="w-[330px] h-[330px]"
        src="/green-icon.svg"
        alt="impact chain logo"
      />
      <div className="flex flex-col items-center justify-center md:text-7xl text-5xl">
        <h1 className="text-white  font-extrabold font-NeueMachinaUltrabold">
          Welcome to{" "}
        </h1>
        <h1>
          <span className="text-green-400  font-extrabold font-NeueMachinaUltrabold">
            impact.
          </span>
          <span className="text-white  font-extrabold font-NeueMachinaUltrabold">
            chain
          </span>
        </h1>
      </div>

      <Link
        to="login"
        className=" mt-20 bg-custom-green px-20 py-2 items-center font-['PP Telegraf'] font-extrabold text-xl text-center rounded-full"
      >
        Login
      </Link>
    </div>
  );
};

export default LandingPage;
