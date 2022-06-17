import React, { useState } from "react";
import { VscAccount, VscBook, VscBrowser, VscDebugStackframeActive, VscSignOut } from "react-icons/vsc";
import { Link, NavLink, Route } from "react-router-dom";
import {logOut} from "../helper/auth.js"

function Navbar() {
  const [active, setActive] = useState ( JSON.parse(localStorage.getItem("activeUser")) || null)

  const handleLogOut = () => 
  {
    logOut()
    setActive(null)
  }

  return (
    <div className="font-mono px-1">
      <h1 className="w-full text-3xl font-bold ">Barber & I.</h1>
      <div className=" grid justify-items-end">
        <Link to={'/'} className="flex p-2">
          <button className="flex">
            Home
            <VscBrowser size={22} />
          </button>
        </Link>
        {
          active ? 
          <React.Fragment>
          <a  className="flex p-2">
            <button className="flex">
              {active.telephone}
              <VscAccount size={22} />
            </button>
        </a> 
        <a className="flex p-2">
          <button onClick={handleLogOut} className="flex">
          Log Out <VscSignOut size={22} />
          </button>
        </a>
        </React.Fragment>
        :
        <React.Fragment>
        <Link to={'/login'} className="flex p-2">
          <button className="flex">
            Login
            <VscAccount size={22} />
          </button>
        </Link>
        </React.Fragment>
        }
        <Link to={'/barbers'} className="flex p-2">
          <button className="flex">
          Barbers <VscBook size={22} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
