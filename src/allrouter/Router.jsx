import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../LandingPage/homepage/Home";
import Services from "../LandingPage/Services/Services";
import ContactUS from "../LandingPage/contact/ContactUS";
import About from "../LandingPage/aboutus/About";
import Blog from "../LandingPage/Blog/Blog";
import BlogDetails from "../LandingPage/Blog/blogDetails/BlogDetails";
import WeeklySedule from "../components/WeeklySedule";
import Successful from "../components/Successful";

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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/week",
        element: <WeeklySedule></WeeklySedule>
      },
      {
        path: "/success",
        element: <Successful></Successful>
      },
      {
        path: '/blog-details/:id',
        element: <BlogDetails></BlogDetails>
      }
    ],
  },
]);

export default router;
