import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../LandingPage/homepage/Home";
import Dashboard from "../LandingPage/Dashboard/Dashboard";
import Profile from "../LandingPage/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ],
  },
]);

export default router;
