import { Routes, Route } from "react-router-dom";
//routes
import routes from "../constants/routes";
//Pages
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/Login/Login";
import Profile from "../pages/auth/Profile/Profile";

function RouteComponent() {
  const RoutesTemplate = (
    <Routes>
      {/* auth */}
      <Route element={<Profile />} path={routes.auth.PROFILE} />
      <Route element={<Signup />} path={routes.auth.SIGNUP} />
      <Route element={<Login />} path={routes.auth.LOGIN} />
      {/* main functionality */}
    </Routes>
  );
  return RoutesTemplate;
}
export default RouteComponent;
