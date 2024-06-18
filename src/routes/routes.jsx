import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default routes;
