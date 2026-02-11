import React, { useState } from "react";
import api from "../api/api";
import BackButton from "../components/BackButton";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function RegisterProvider() {
  const [data, setData] = useState({
    providerName: "",
    gender: "",
    email: "",
    phone: "",
    nearPlace: "",
    serviceType: "",
    amountPerDay: "",
    password: ""
  });

  const navigate = useNavigate();

  const register = async () => {
    try {
      await api.post("/provider/register", data);
      alert("Provider Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register Failed");
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-4">
          Provider Registration
        </h2>

        <div className="mt-5 flex flex-col gap-3">
          <input className="input" placeholder="Provider Name"
            onChange={(e) => setData({ ...data, providerName: e.target.value })} />

          <input className="input" placeholder="Gender"
            onChange={(e) => setData({ ...data, gender: e.target.value })} />

          <input className="input" placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })} />

          <input className="input" placeholder="Phone"
            onChange={(e) => setData({ ...data, phone: e.target.value })} />

          <input className="input" placeholder="Near Place"
            onChange={(e) => setData({ ...data, nearPlace: e.target.value })} />

          <input className="input" placeholder="Service Type (Pandit/Cook/DJ)"
            onChange={(e) => setData({ ...data, serviceType: e.target.value })} />

          <input className="input" placeholder="Amount Per Day"
            onChange={(e) => setData({ ...data, amountPerDay: e.target.value })} />

          <input className="input" type="password" placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })} />

          <button className="btn-green" onClick={register}>
            Register Provider
          </button>
        </div>
      </div>

      <style>{`
        .input{
          padding: 12px;
          border-radius: 10px;
          background: #111827;
          border: 1px solid #374151;
          outline: none;
        }
        .btn-green{
          background: #22c55e;
          padding: 12px;
          border-radius: 10px;
          font-weight: bold;
          color: black;
        }
        .btn-green:hover{
          background: #16a34a;
        }
      `}</style>
    </div>
  );
}
