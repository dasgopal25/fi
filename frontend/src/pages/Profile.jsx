import React, { useEffect, useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { logoutRole } = useContext(AuthContext);


  const loadProfile = async () => {
    try {
      const res = await api.get("/user/profile");
      setUser(res.data);
    } catch {
      alert("Login Required");
      navigate("/login");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const updateProfile = async () => {
    await api.put("/user/update", user);
    alert("Profile Updated");
  };

  const deleteAccount = async () => {
    if (!confirm("Delete Account?")) return;
    await api.delete("/user/delete");
    alert("Account Deleted");
    navigate("/login");
  };

  const logout = async () => {
  await api.post("/user/logout");
  logoutRole(); // ✅ sidebar auto refresh
  alert("Logout Success");
  navigate("/");
};


  if (!user) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          My Profile
        </h2>

        <div className="mt-6 flex flex-col gap-3">
          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={user.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />

          <button
            className="bg-green-500 text-black font-bold py-3 rounded-lg"
            onClick={updateProfile}
          >
            Update
          </button>

          <button
            className="bg-red-600 text-white font-bold py-3 rounded-lg"
            onClick={deleteAccount}
          >
            Delete Account
          </button>

          <button
            className="bg-orange-500 text-black font-bold py-3 rounded-lg"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
