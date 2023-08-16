const express = require("express");
const router = express.Router();
const {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} = require("../Controllers/characterController");
//const authenticateUser = require("../Middleware/auth");

// Create a new character
router.post("/", createCharacter);

// Read all characters
router.get("/", getAllCharacters);

// Read a single character by ID
router.get("/:id", getCharacterById);

// Update a character by ID
router.put("/:id", updateCharacter);

// Delete a character by ID
router.delete("/:id", deleteCharacter);

module.exports = router;
