const { default: mongoose } = require("mongoose");

const user = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", user);
module.exports = Contact;
