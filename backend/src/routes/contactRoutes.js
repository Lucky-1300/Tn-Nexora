import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Data saved to MongoDB",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error saving data",
    });
  }
});

export default router;