import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./data/Routes";
import LoadingScreen from "./components/LoadingScreen";
import Layout from "./components/Layout";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setUserInfo } from "./redux/slices/app";

// Pages
const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Analytics = lazy(() => import("./pages/analytics/Analytics"));
const AskAI = lazy(() => import("./pages/askai/AskAI"));
const Settings = lazy(() => import("./pages/settings/Settings"));
const CarbonCredits = lazy(
  () => import("./pages/carbon-credits/CarbonCredits")
);
const LandingPage = lazy(() => import("./pages/landing/Landing"));
const Notfound = lazy(() => import("./components/Notfound"));
const ResetPassword = lazy(() => import("./pages/reset/ResetPassword"));
const Help = lazy(() => import("./pages/help/Help"));

const App = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    let user = localStorage.getItem("userInfo");
    if (user) {
      dispatch(setIsAuthenticated(true));
      dispatch(setUserInfo(user));
    }
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/askai" element={<AskAI />} />
              <Route path="/carbon-credits" element={<CarbonCredits />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
            </Route>
          </Route>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/home" /> : <LandingPage />
            }
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
          />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
