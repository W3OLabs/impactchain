import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page flex gap-5 flex-col justify-center items-center fon">
      <div className="img" />
      <div className="group">
        <span className="font-NeueMachinaUltrabold text-white">
          Welcome to{" "}
        </span>
        <h1 className="font-NeueMachinaUltrabold">
          <span className="text-custom-green">impact.</span>
          <span className="text-white">chain</span>
        </h1>
      </div>
      <div className="button-box">
        <Link to="login" className="mt-5">
          <span className="text-4">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
