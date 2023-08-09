import { Outlet } from "react-router-dom";
import Navber from "./commonData/Navber";
import Footer from "./commonData/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
