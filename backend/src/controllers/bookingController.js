const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const { providerId, bookingDate } = req.body;

    const booking = await Booking.create({
      userId,
      providerId,
      bookingDate,
    });

    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ userId }).populate("providerId");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProviderBookings = async (req, res) => {
  try {
    const providerId = req.user.id;

    const bookings = await Booking.find({ providerId }).populate("userId");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.acceptRejectBooking = async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );

    res.json({ message: "Booking Updated", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
