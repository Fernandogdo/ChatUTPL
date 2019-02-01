'use strict'

const express = require('express');
const router = express.Router();
const glosario = require('../controllers/glosario.controller');

router.get('/', glosario.getGlosarios);
router.post('/', glosario.createGlosario);
router.get('/:id', glosario.getGlosario);
router.put('/:id', glosario.editGlosario);
router.delete('/:id', glosario.deleteGlosario);

module.exports = router;
