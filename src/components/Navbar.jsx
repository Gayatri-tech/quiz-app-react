import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-300 md:flex md:justify-between md:p-3">
      <div className="nav-logo text-center text-2xl md:text-3xl font-semibold text-blue-950 md:p-1">
        QuizG
      </div>
      <div className="nav-tools">
        <ul className="flex justify-around md:text-lg  font-semibold p-2 md:gap-14">
          <li className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
