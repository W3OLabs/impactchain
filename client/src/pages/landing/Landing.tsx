import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="img"/>
      <div className="group">
        <span className="text">Welcome to </span>
        <span className="text-2">impact.</span>
        <span className="text-3">chain</span>
      </div>
      <div className="button-box">
        <Link to="login">
          <span className="text-4">
            Login
          </span>
        </Link>
      </div>
      
    </div>
  );
};

export default LandingPage;