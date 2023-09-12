import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../Pages/Auth/LoginPage";
import RegistrationPage from "../Pages/Auth/RegistrationPage";
import LandingPage from "../Pages/LandingPage/LandingPage";

function AllRoute() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

export default AllRoute;
