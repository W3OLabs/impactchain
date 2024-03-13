import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-[auto] h-[800px] m-0 min-h-100vh relative bg-gradient-to-t from-black to-green-500 overflow-hidden flex-col">
      <img className="w-[330px] h-[330px] items-center top-[30px] left-[450px] absolute" src="/green-icon.svg" alt="impact chain logo"/>
      <div className="w-[793px] left-[223px] top-[300px] absolute text-center">
        <span className="text-white text-[80px] font-extrabold font-NeueMachinaUltrabold">Welcome to </span>
        <span className="text-green-400 text-[80px] font-extrabold font-NeueMachinaUltrabold">impact.</span>
        <span className="text-white text-[80px] font-extrabold font-NeueMachinaUltrabold">chain</span>
      </div>
      <div className="relative w-[240px] h-[40px] top-[600px] mr-0 mb-100px left-[500px] bg-[#4fef64] z-3 rounded-[20px]">
        <Link to="login">
          <span className="w-[156px] h-[33px] left-[42px] top-[4px] absolute text-center text-black text-xl font-extrabold font-['PP Telegraf']">
            Login
          </span>
        </Link>
      </div>
      
    </div>
  );
};

export default LandingPage;