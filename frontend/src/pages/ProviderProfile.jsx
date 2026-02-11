import React, { useEffect, useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export default function ProviderProfile() {
  const [provider, setProvider] = useState(null);
  const navigate = useNavigate();
  const { logoutRole } = useContext(AuthContext);


  const loadProfile = async () => {
    try {
      const res = await api.get("/provider/profile");
      setProvider(res.data);
    } catch (err) {
      alert("Provider Login Required");
      navigate("/login");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const updateProfile = async () => {
    await api.put("/provider/update", provider);
    alert("Provider Profile Updated");
  };

  const deleteAccount = async () => {
    if (!confirm("Delete Provider Account?")) return;
    await api.delete("/provider/delete");
    alert("Provider Account Deleted");
    navigate("/login");
  };

  const logout = async () => {
  await api.post("/provider/logout");
  logoutRole(); // ✅ sidebar auto refresh
  alert("Logout Success");
  navigate("/");
};


  if (!provider) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Provider Profile
        </h2>

        <div className="mt-6 flex flex-col gap-3">
          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.providerName}
            onChange={(e) =>
              setProvider({ ...provider, providerName: e.target.value })
            }
            placeholder="Provider Name"
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.gender}
            onChange={(e) => setProvider({ ...provider, gender: e.target.value })}
            placeholder="Gender"
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.phone}
            onChange={(e) => setProvider({ ...provider, phone: e.target.value })}
            placeholder="Phone"
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.nearPlace}
            onChange={(e) =>
              setProvider({ ...provider, nearPlace: e.target.value })
            }
            placeholder="Near Place"
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.serviceType}
            onChange={(e) =>
              setProvider({ ...provider, serviceType: e.target.value })
            }
            placeholder="Service Type"
          />

          <input
            className="p-3 rounded-lg bg-gray-900 border border-gray-700"
            value={provider.amountPerDay}
            onChange={(e) =>
              setProvider({ ...provider, amountPerDay: e.target.value })
            }
            placeholder="Amount Per Day"
          />

          <button
            className="bg-green-500 text-black font-bold py-3 rounded-lg"
            onClick={updateProfile}
          >
            Update Profile
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
