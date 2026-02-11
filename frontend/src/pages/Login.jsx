import React, { useContext, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [roleSelect, setRoleSelect] = useState("user");
  const [data, setData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { loginRole } = useContext(AuthContext);

  const login = async () => {
    if (!data.email || !data.password) {
      alert("Email and Password Required!");
      return;
    }

    try {
      if (roleSelect === "user") {
        await api.post("/user/login", data);
        loginRole("user"); // ✅ sidebar refresh auto
        alert("User Login Success");
        navigate("/services");
      } else {
        await api.post("/provider/login", data);
        loginRole("provider"); // ✅ sidebar refresh auto
        alert("Provider Login Success");
        navigate("/provider-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-4">
          Login
        </h2>

        <div className="flex gap-2 mt-4">
          <button
            className={`flex-1 py-2 rounded-lg font-bold ${
              roleSelect === "user" ? "bg-green-500 text-black" : "bg-gray-800"
            }`}
            onClick={() => setRoleSelect("user")}
          >
            User
          </button>

          <button
            className={`flex-1 py-2 rounded-lg font-bold ${
              roleSelect === "provider"
                ? "bg-green-500 text-black"
                : "bg-gray-800"
            }`}
            onClick={() => setRoleSelect("provider")}
          >
            Provider
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
