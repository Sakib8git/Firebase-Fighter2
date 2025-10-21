import { createBrowserRouter } from "react-router";
import Root from "../LAyout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Signin from "../Pages/SignIn";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);
