import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import RegisterProvider from "./pages/RegisterProvider";
import Services from "./pages/Services";
import BookingStatus from "./pages/BookingStatus";
import ProviderDashboard from "./pages/ProviderDashboard";
import Support from "./pages/Support";
import Plans from "./pages/Plans";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import ProviderProfile from "./pages/ProviderProfile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/user-register" element={<RegisterUser />} />
        <Route path="/provider-register" element={<RegisterProvider />} />

        <Route path="/services" element={<Services />} />

        <Route path="/booking-status" element={<BookingStatus />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />

        <Route path="/support" element={<Support />} />
        <Route path="/plans" element={<Plans />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/provider-profile" element={<ProviderProfile />} />


        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
