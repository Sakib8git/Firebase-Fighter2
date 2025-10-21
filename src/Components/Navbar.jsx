import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
// import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
// import MyLink from "./MyLink";

const Navbar = () => {
  const { user, setUser, signOutFnc, loading } = use(AuthContext);

  const handleSignout = () => {
    signOutFnc()
      .then(() => {
        toast("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  console.log(loading);
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center ">
          <img src={logo} className="w-[55px]" alt="*" />
          <h1 className="text-3xl font-bold">Fighter</h1>
        </Link>
        <ul className="flex items-center gap-5">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about"}>About US</MyLink>
          </li>
          {/* {user ? (
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          ) : (
            ""
          )} */}
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        {loading ? (
          <PacmanLoader color="#00ff21" />
        ) : user ? (
          <div className="text-center space-y-3">
            {/* <img 
              src={
                user?.photoURL || "https://i.ibb.co.com/QFCyYkhY/mr-bean.png"
              }
              className="h-15 w-15 rounded-full mx-auto "
              alt=""
            /> */}

            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className=""
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={
                  user?.photoURL || "https://i.ibb.co.com/QFCyYkhY/mr-bean.png"
                }
                className="h-15 w-15 rounded-full mx-auto "
                alt=""
              />
            </button>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm relative"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-white/80">{user?.email}</p>
              <button onClick={handleSignout} className="my-btn ">
                Sign Out
              </button>
            </ul>

            {/* <button onClick={handleSignout} className="my-btn">
              Sign Out
            </button> */}
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
