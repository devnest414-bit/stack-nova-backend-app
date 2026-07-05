import Contact from "../models/Contact.js";

// @route  POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, address, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }

    const contact = await Contact.create({ name, email, phone, address, message });
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @route  GET /api/contact
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
