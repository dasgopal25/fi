import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const { role } = useContext(AuthContext);

  return (
    <>
      <div className="w-full flex items-center justify-between bg-black px-4 py-3 border-b border-gray-800">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl font-bold"
        >
          ☰
        </button>
        <h2 className="text-lg font-bold text-green-400">Fixxo</h2>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-950 border-r border-gray-800 p-5 z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold text-green-400 mb-6">Menu</h2>

        <div className="flex flex-col gap-3">
          <Link className="sidebar-link" to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link
            className="sidebar-link"
            to="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          {!role && (
            <>
              <Link
                className="sidebar-link"
                to="/user-register"
                onClick={() => setOpen(false)}
              >
                User Register
              </Link>

              <Link
                className="sidebar-link"
                to="/provider-register"
                onClick={() => setOpen(false)}
              >
                Provider Register
              </Link>

              <Link
                className="sidebar-link"
                to="/login"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </>
          )}

          {role === "user" && (
            <>
              <Link
                className="sidebar-link"
                to="/booking-status"
                onClick={() => setOpen(false)}
              >
                Booking Status
              </Link>

              <Link
                className="sidebar-link"
                to="/profile"
                onClick={() => setOpen(false)}
              >
                User Profile
              </Link>
            </>
          )}

          {role === "provider" && (
            <>
              <Link
                className="sidebar-link"
                to="/provider-dashboard"
                onClick={() => setOpen(false)}
              >
                Provider Dashboard
              </Link>

              <Link
                className="sidebar-link"
                to="/provider-profile"
                onClick={() => setOpen(false)}
              >
                Provider Profile
              </Link>
            </>
          )}

          <Link
            className="sidebar-link"
            to="/plans"
            onClick={() => setOpen(false)}
          >
            Plans
          </Link>

          <Link
            className="sidebar-link"
            to="/support"
            onClick={() => setOpen(false)}
          >
            Support
          </Link>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 bg-red-600 px-4 py-2 rounded-lg w-full font-bold"
        >
          Close
        </button>
      </div>

      <style>
        {`
          .sidebar-link{
            padding: 10px;
            border-radius: 10px;
            background: #111;
            border: 1px solid #222;
            font-weight: bold;
            transition: 0.3s;
          }
          .sidebar-link:hover{
            background: #22c55e;
            color: black;
          }
        `}
      </style>
    </>
  );
}
