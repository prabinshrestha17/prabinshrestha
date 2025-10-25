const Contact = require("../model/contact.model");

exports.createContactServices = ({ clientName, email, subject, message }) => {
  const data = Contact.create({
    clientName,
    email,
    subject,
    message,
  });

  return data;
};

exports.getContactServices = () => {
  const data = Contact.find({});
  return data;
};

exports.getSpecificContactServices = id => {
  const data = Contact.findById(id);
  return data;
};

exports.deleteContactServices = id => {
  const data = Contact.findByIdAndDelete(id);
  return data;
};

exports.updateContactServices = (id, updateData) => {
  const data = Contact.findByIdAndUpdate(id, updateData, { new: true });
  return data;
};
