import React, { useContext, useEffect, useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProviderDashboard() {
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();
  const { logoutRole } = useContext(AuthContext);

  const loadBookings = async () => {
    try {
      const res = await api.get("/booking/provider");
      setBookings(res.data);
    } catch {
      alert("Provider Login Required");
      navigate("/login");
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (bookingId, status) => {
    try {
      await api.put("/booking/status", { bookingId, status });
      alert("Status Updated: " + status);
      loadBookings();
    } catch {
      alert("Status update failed");
    }
  };

  const logout = async () => {
    try {
      await api.post("/provider/logout");
      logoutRole(); // ✅ sidebar auto refresh
      alert("Logout Success");
      navigate("/");
    } catch {
      alert("Logout Failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <BackButton />

          <button
            onClick={logout}
            className="bg-orange-500 text-black font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Provider Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="bg-gray-950 border border-gray-800 rounded-xl p-4"
            >
              <h3 className="text-lg font-bold text-green-400">
                {b.userId?.fullname}
              </h3>

              <p className="text-gray-300">Booking Date: {b.bookingDate}</p>

              <p className="text-gray-300">
                Status: <b className="text-yellow-400">{b.status}</b>
              </p>

              {b.status === "Pending" && (
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => updateStatus(b._id, "Accepted")}
                    className="flex-1 bg-green-500 text-black font-bold py-2 rounded-lg"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => updateStatus(b._id, "Rejected")}
                    className="flex-1 bg-red-600 text-white font-bold py-2 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No bookings found.
          </p>
        )}
      </div>
    </div>
  );
}
