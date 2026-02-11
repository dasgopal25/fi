import React from "react";

export default function Navbar({ title }) {
  return (
    <div className="w-full bg-black border-b border-gray-800 px-4 py-3 flex justify-center">
      <h2 className="text-xl font-bold text-green-400">{title || "Fixxo"}</h2>
    </div>
  );
}
