const Character = require("../Models/characterModel");

const createCharacter = async (req, res) => {
  try {
    console.log("Cannot get ",req.body);
    const characterData = req.body;
    const character = await Character.create(characterData);
    res.status(201).json(character);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create character", error: err.message });
  }
};

const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get characters", error: err.message });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get character", error: err.message });
  }
};

const updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update character", error: err.message });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json({ message: "Character deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete character", error: err.message });
  }
};

module.exports = {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
};
