const { Router } = require('express');
const infoGeneral = require('../data/InfoGeneralData.json');

const router = Router();

router.get('/', (req, res) => {
  res.json(infoGeneral);
});

router.get('/:typeInfo', (req, res) => {
  const { typeInfo } = req.params;

  if (infoGeneral[typeInfo]) {
    res.json({ [typeInfo]: infoGeneral[typeInfo] });
  } else {
    res.status(404).json({ error: "Elemento no encontrado" });
  }

});

router.get("/:typeInfo/:info", (req, res) => {
  const { typeInfo, info } = req.params;

  if (infoGeneral[typeInfo][info]) {
    res.json({ [info]: infoGeneral[typeInfo][info] });
  } else {
    res.status(404).json({ error: "Elemento no encontrado" });
  }
});

module.exports = router;