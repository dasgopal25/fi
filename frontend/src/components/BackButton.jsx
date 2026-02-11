import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-800 hover:bg-green-500 hover:text-black px-4 py-2 rounded-lg font-bold"
    >
      ⬅ Back
    </button>
  );
}
