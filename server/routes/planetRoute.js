const express = require("express");
const {
  allPlanets,
  singlePlanet,
  newPlanet,
  deletePlanet,
  updatePlanet,
} = require("../controllers/planetsController");
const router = express.Router();

// Get all planets
router.get("/", allPlanets);

// Get a single planet
router.get("/:id", singlePlanet);

// Add a planet
router.post("/", newPlanet);

// delete a planet
router.delete("/:id", deletePlanet);

// update a planet
router.patch("/:id", updatePlanet);

module.exports = router;
