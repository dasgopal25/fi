import React, { useEffect, useState } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [providers, setProviders] = useState([]);
  const [serviceType, setServiceType] = useState("");

  const loadProviders = async () => {
    const res = await api.get(`/service/providers?serviceType=${serviceType}`);
    setProviders(res.data);
  };

  useEffect(() => {
    loadProviders();
  }, [serviceType]);

  const bookNow = async (providerId) => {
    const bookingDate = prompt("Enter booking date (Example: 21 Feb)");
    if (!bookingDate) return;

    try {
      await api.post("/booking/create", { providerId, bookingDate });
      alert("Booking Created Successfully! Status: Pending");
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed (Login required)");
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className="p-4 max-w-6xl mx-auto">
        <BackButton />

        <h2 className="text-2xl font-bold text-green-400 text-center mt-4">
          Services Providers
        </h2>

        <div className="flex justify-center mt-4">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg"
          >
            <option value="">All</option>
            <option value="Pandit">Pandit</option>
            <option value="Decoration">Decoration</option>
            <option value="Cook">Cook</option>
            <option value="DJ">DJ</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {providers.map((p) => (
            <ServiceCard key={p._id} provider={p} onBook={bookNow} />
          ))}
        </div>
      </div>
    </div>
  );
}
