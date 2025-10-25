const express = require("express");
const {
  createContactController,
  getContactController,
  getSpecificContactController,
  deleteContactController,
  updateContactController,
} = require("../controller/contact.controller");

const contactRouter = express.Router();
contactRouter.post("/create", createContactController);
contactRouter.get("/all", getContactController);
contactRouter.get("/:id", getSpecificContactController);
contactRouter.delete("/:id", deleteContactController);
contactRouter.put("/:id", updateContactController);

module.exports = contactRouter;
