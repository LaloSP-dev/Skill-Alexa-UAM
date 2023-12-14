const { Router } = require("express");
const admision = require("../data/AdmisionData.json");

const router = Router();

router.get("/", (req, res) => {
  res.json(admision);
});

router.get(`/infoadmision/:info`, (req, res) => {
  const { info } = req.params;

  if (admision.infoadmision[info]) {
    res.json({ [info]: admision.infoadmision[info] });
  } else {
    res.status(404).json({ error: "Elemento no encontrado" });
  }
});

module.exports = router;
