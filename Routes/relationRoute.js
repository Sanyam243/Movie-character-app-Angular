const express = require("express");
const router = express.Router();
const {
  createRelation,
  getAllRelations,
  getRelationById,
  updateRelation,
  deleteRelation,
} = require("../Controllers/relationController");
//const authenticateUser = require("../Middleware/auth");

// Create a new relation
router.post("/", createRelation);

// Read all relations
router.get("/", getAllRelations);

// Read a single relation by ID
router.get("/:id", getRelationById);

// Update a relation by ID
router.put("/:id", updateRelation);

// Delete a relation by ID
router.delete("/:id", deleteRelation);

module.exports = router;
