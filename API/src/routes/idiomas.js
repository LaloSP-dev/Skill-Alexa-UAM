const {Router} = require('express');
const idiomas = require('../data/IdiomasData.json');

const router = Router();

router.get('/', (req, res) => {
  res.json(idiomas);
});

router.get(`/infoidiomas/:info`, (req, res) => {
  const { info } = req.params;

  if (idiomas.infoidiomas[info]) {
    res.json({ [info]: idiomas.infoidiomas[info] });
  } else {
    res.status(404).json({ error: 'Elemento no encontrado' });
  }
});

module.exports = router;