const { smtpHost } = require("../api/dotenv");
const { adminNotificationMailTemplate } = require("../email/adminTemplate");
const { userThankYouMailTemplate } = require("../email/usertemplate");
const { sendEmail } = require("../email/sendEmail");
const {
  createContactServices,
  getContactServices,
  getSpecificContactServices,
  deleteContactServices,
  updateContactServices,
} = require("../services/contact.service");

exports.createContactController = async (req, res) => {
  try {
    const data = req.body;

    const result = await createContactServices(data);

    await sendEmail({
      from: smtpHost,
      to: data.email,
      subject: "Thank You for Reaching Out!",
      html: userThankYouMailTemplate(
        data.clientName || "Valued User",
        data.subject || "General Inquiry",
        data.message || ""
      ),
    });

    await sendEmail({
      from: smtpHost,
      to: smtpHost,
      replyTo: data.email,
      subject: `New Message from ${data.clientName || "Unknown"}: ${
        data.subject
      }`,
      html: adminNotificationMailTemplate(
        data.clientName || "N/A",
        data.email || "N/A",
        data.subject || "No Subject",
        data.message || "No Message Provided"
      ),
    });

    res.status(201).json({
      success: true,
      message: "Contact message saved and emails sent successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in createContactController:", error);

    res.status(500).json({
      success: false,
      message: "Failed to process contact form submission",
      error: error.message,
    });
  }
};

exports.getContactController = async (req, res) => {
  try {
    const result = await getContactServices();
    res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contacts",
      error: error.message,
    });
  }
};

exports.getSpecificContactController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSpecificContactServices(id);
    res.status(200).json({
      success: true,
      message: "Contact retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contact",
      error: error.message,
    });
  }
};

exports.deleteContactController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteContactServices(id);
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete contact",
      error: error.message,
    });
  }
};

exports.updateContactController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.data;
    const result = await updateContactServices(id, updateData);
    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update contact",
      error: error.message,
    });
  }
};
