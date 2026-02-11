import React from "react";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";

export default function Plans() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-5xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Choose Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-green-400">Basic Plan</h3>
            <p className="text-yellow-400 font-bold mt-3">₹199</p>
            <button className="mt-4 w-full bg-green-500 text-black py-3 rounded-lg font-bold">
              Payment
            </button>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-green-400">Premium Plan</h3>
            <p className="text-yellow-400 font-bold mt-3">₹499</p>
            <button className="mt-4 w-full bg-orange-500 text-black py-3 rounded-lg font-bold">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
