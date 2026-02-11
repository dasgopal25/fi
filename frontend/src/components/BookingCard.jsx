import React from "react";

export default function BookingCard({ booking, onPay }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 shadow-lg">
      <h3 className="text-lg font-bold text-green-400">
        {booking.providerId?.providerName}
      </h3>

      <p className="text-gray-300">Date: {booking.bookingDate}</p>
      <p className="text-gray-300">
        Status:{" "}
        <span className="font-bold text-yellow-400">{booking.status}</span>
      </p>
      <p className="text-gray-300">
        Payment:{" "}
        <span className="font-bold text-blue-400">
          {booking.paymentStatus}
        </span>
      </p>

      {booking.status === "Accepted" && (
        <a
          href={`tel:${booking.providerId?.phone}`}
          className="block mt-3 w-full text-center bg-green-500 text-black font-bold py-2 rounded-lg"
        >
          📞 Call Provider
        </a>
      )}

      {booking.paymentStatus === "Pending" && (
        <button
          onClick={() => onPay(booking._id)}
          className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded-lg"
        >
          Pay Now (Demo)
        </button>
      )}
    </div>
  );
}
