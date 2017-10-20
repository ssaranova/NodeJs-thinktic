var express = require('express');
var router = express.Router();

// Require controller modules
var generos_controller = require('../controllers/generosController');


router.get('/', generos_controller.genero_list);
