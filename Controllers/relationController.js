const Relation = require("../Models/relationModel");

const createRelation = async (req, res) => {
  try {
    const relationData = req.body;
    const relation = await Relation.create(relationData);
    res.status(201).json(relation);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create relation", error: err.message });
  }
};

const getAllRelations = async (req, res) => {
  try {
    const relations = await Relation.find();
    res.json(relations);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get relations", error: err.message });
  }
};

const getRelationById = async (req, res) => {
  try {
    const relation = await Relation.findById(req.params.id);
    if (!relation) {
      return res.status(404).json({ message: "Relation not found" });
    }
    res.json(relation);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get relation", error: err.message });
  }
};

const updateRelation = async (req, res) => {
  try {
    const relation = await Relation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!relation) {
      return res.status(404).json({ message: "Relation not found" });
    }
    res.json(relation);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update relation", error: err.message });
  }
};

const deleteRelation = async (req, res) => {
  try {
    const relation = await Relation.findByIdAndDelete(req.params.id);
    if (!relation) {
      return res.status(404).json({ message: "Relation not found" });
    }
    res.json({ message: "Relation deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete relation", error: err.message });
  }
};

module.exports = {
  createRelation,
  getAllRelations,
  getRelationById,
  updateRelation,
  deleteRelation,
};
