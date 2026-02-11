import React, { useEffect, useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import BookingCard from "../components/BookingCard";

export default function BookingStatus() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    try {
      const res = await api.get("/booking/user");
      setBookings(res.data);
    } catch {
      alert("Login Required");
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const payNow = async (bookingId) => {
    await api.post("/payment/demo", { bookingId });
    alert("Payment Done Demo");
    loadBookings();
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-5xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          My Booking Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {bookings.map((b) => (
            <BookingCard key={b._id} booking={b} onPay={payNow} />
          ))}
        </div>
      </div>
    </div>
  );
}
