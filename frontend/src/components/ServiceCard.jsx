import React from "react";

export default function ServiceCard({ provider, onBook }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 shadow-lg">
      <h3 className="text-lg font-bold text-green-400">
        {provider.providerName}
      </h3>

      <p className="text-gray-300">Service: {provider.serviceType}</p>
      <p className="text-gray-300">Near: {provider.nearPlace}</p>
      <p className="text-yellow-400 font-bold mt-2">
        ₹ {provider.amountPerDay} / day
      </p>

      <button
        onClick={() => onBook(provider._id)}
        className="mt-3 w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded-lg"
      >
        Book Now
      </button>
    </div>
  );
}
