const Provider = require("../models/Provider");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const exist = await Provider.findOne({ email: req.body.email });
    if (exist) return res.status(400).json({ message: "Provider already exists" });

    const hash = await bcrypt.hash(req.body.password, 10);

    const provider = await Provider.create({
      ...req.body,
      password: hash,
    });

    res.json({ message: "Provider Registered", provider });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const provider = await Provider.findOne({ email: req.body.email });
    if (!provider) return res.status(400).json({ message: "Provider not found" });

    const match = await bcrypt.compare(req.body.password, provider.password);
    if (!match) return res.status(400).json({ message: "Wrong Password" });

    const token = jwt.sign(
      { id: provider._id, role: "provider" },
      process.env.SECRET_CODE,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Provider Login Success", provider });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Provider Logout Success" });
};

exports.providerProfile = async (req, res) => {
  try {
    const provider = await Provider.findById(req.user.id).select("-password");

    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    res.json(provider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const updated = await Provider.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    }).select("-password");

    res.json({ message: "Provider Updated", updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    await Provider.findByIdAndDelete(req.user.id);

    res.clearCookie("token");
    res.json({ message: "Provider Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
