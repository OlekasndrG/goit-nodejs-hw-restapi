const express = require("express");

const { validateBody } = require("../../middlewars");
const schemas = require("../../schemas/contacts");

const router = express.Router();
const ctrl = require("../../сontrollers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;
