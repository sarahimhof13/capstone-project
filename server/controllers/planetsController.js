const Planet = require("../models/planetModel");
const mongoose = require("mongoose");

// get all planets
const allPlanets = async (req, res) => {
  const planets = await Planet.find({}).sort({ name: -1 });

  res.status(200).json(planets);
};

// get a single planet
const singlePlanet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "planet does not exist" });
  }

  const planet = await Planet.findById(id);

  res.status(200).json(planet);
};

// add a planet
const newPlanet = async (req, res) => {
  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    temperature,
    images,
    color,
  } = req.body;

  try {
    const planet = await Planet.create({
      name,
      overview,
      structure,
      geology,
      rotation,
      revolution,
      temperature,
      images,
      color,
    });
    res.status(200).json(planet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a planet

const deletePlanet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No planet exists" });
  }

  const planet = await Planet.findOneAndDelete({ _id: id });

  if (!planet) {
    return res.status(400).json({ error: "No planet exists" });
  }

  res.status(200).json(planet);
};

// update a planet

const updatePlanet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No planet exists" });
  }

  const planet = await Planet.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!planet) {
    return res.status(400).json({ error: "No planet exists" });
  }

  res.status(200).json(planet);
};

module.exports = {
  allPlanets,
  singlePlanet,
  newPlanet,
  deletePlanet,
  updatePlanet,
};
