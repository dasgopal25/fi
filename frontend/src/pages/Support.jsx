import React from "react";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";

export default function Support() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-4xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Support & Safety
        </h2>

        <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold text-red-500">🚨 SOS Emergency</h3>
          <button className="mt-4 w-full bg-red-600 py-3 rounded-lg font-bold">
            SOS SOS EMERGENCY
          </button>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mt-6">
          <p className="text-gray-300">📞 24x7 Support Available</p>
          <p className="text-gray-300">📝 Report Issue</p>
          <p className="text-gray-300">📌 Booking Help</p>
        </div>
      </div>
    </div>
  );
}
