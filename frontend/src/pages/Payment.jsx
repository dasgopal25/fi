import React, { useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [bookingId, setBookingId] = useState("");
  const navigate = useNavigate();

  const payNow = async () => {
    try {
      await api.post("/payment/demo", { bookingId });
      alert("Payment Successful Demo");
      navigate("/booking-status");
    } catch {
      alert("Payment Failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Demo Payment
        </h2>

        <input
          className="w-full p-3 mt-6 rounded-lg bg-gray-900 border border-gray-700"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />

        <button
          onClick={payNow}
          className="w-full bg-green-500 text-black font-bold py-3 mt-4 rounded-lg"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
