import Contact from "../models/ContactModel.js";

export const saveContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to save contact",
    });
  }
};