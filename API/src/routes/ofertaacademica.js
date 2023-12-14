const { Router } = require("express");
const ofertaAcademica = require("../data/OfertaAcademicaData.json");

const router = Router();

router.get("/", (req, res) => {
  res.json(ofertaAcademica);
});

router.get(`/infoofertaacademica/:info`, (req, res) => {
  const { info } = req.params;

  if (ofertaAcademica.infoofertaacademica[info]) {
    res.json({ [info]: ofertaAcademica.infoofertaacademica[info] });
  } else {
    res.status(404).json({ error: "Elemento no encontrado" });
  }
});

module.exports = router;
