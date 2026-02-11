import React from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-400 text-center mt-6">
          Welcome to Fixxo
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Book Event Services Easily - MERN Stack Project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-red-600 rounded-xl p-6 font-bold text-center">
            Pandit
          </div>
          <div className="bg-blue-600 rounded-xl p-6 font-bold text-center">
            Decoration
          </div>
          <div className="bg-green-600 rounded-xl p-6 font-bold text-center">
            Cook
          </div>
          <div className="bg-yellow-500 text-black rounded-xl p-6 font-bold text-center">
            DJ Sound
          </div>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 mt-10">
          <h2 className="text-xl font-bold text-green-400">About Fixxo</h2>
          <p className="text-gray-300 mt-2">
            Fixxo is an event booking platform where users can book providers
            like Pandit, Decoration team, Cook, DJ etc. Providers can accept or
            reject bookings. Users can track booking status and pay demo payment.
          </p>
        </div>
      </div>
    </div>
  );
}
