const { Router } = require("express");
const becas = require("../data/BecasData.json");

const router = Router();

router.get("/", (req, res) => {
  res.json(becas);
});

router.get(`/infobecas/:info`, (req, res) => {
  const { info } = req.params;

  if (becas.infobecas[info]) {
    res.json({ [info]: becas.infobecas[info] })
  } else {
    res.status(404).json({ error: "Elemento no encontrado" });
  }
});

module.exports = router;
