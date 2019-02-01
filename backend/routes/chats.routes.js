'use strict'

const express = require('express');
const router = express.Router();
const chat = require('../controllers/chat.controller');

router.get('/', chat.getChats);
router.post('/', chat.createChat);
// router.get('/:id', chat.getChat);
// router.put('/:id', chat.editChat);


module.exports = router;
