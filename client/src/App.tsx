import { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./data/Routes";
import LoadingScreen from "./components/LoadingScreen";
import Layout from "./components/Layout";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import AskAI from "./pages/askai/AskAI";
import CarbonCredits from "./pages/carbon-credits/CarbonCredits";
import LandingPage from "./pages/landing/Landing";
import Notfound from "./components/Notfound";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated");
    }
  }, [isAuthenticated]);

  console.log(isAuthenticated);
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
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
