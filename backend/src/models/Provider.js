const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    providerName: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    nearPlace: { type: String, required: true },
    serviceType: { type: String, required: true },
    amountPerDay: { type: Number, required: true },
    images: [{ type: String }],
    password: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Provider", providerSchema);
