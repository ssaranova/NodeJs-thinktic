var express = require('express');
var router = express.Router();

// Require controller modules
var libros_controller = require('../controllers/librosController');

router.get('/add', libros_controller.libro_add_get);
router.post('/add', libros_controller.libro_add_post);

router.get('/edit/:id', libros_controller.libro_edit_get);
router.post('/edit/:id', libros_controller.libro_edit_post);

router.get('/delete/:id', libros_controller.libro_delete_get);
router.post('/delete/:id', libros_controller.libro_delete_post);

router.get('/', libros_controller.libro_list);
router.get('/:id', libros_controller.libro_show);

/*
var misLibros = [
  {
    'id': '1',
    'isbn': '182381313',
    'titulo': 'Mi titulo',
    'autores': 'Mi autor1',
    'sinopsis': 'Trata de un libro'
  },
  {
    'id': '2',
    'isbn': '1823811312313',
    'titulo': 'Mi titulo2',
    'autores': 'Mi autor2',
    'sinopsis': 'Trata de un libro'
  },
  {
    'id': '3',
    'isbn': '442141234',
    'titulo': 'Mi titulo3',
    'autores': 'Mi autor3',
    'sinopsis': 'Trata de un libro'
  }
];
*/

/*
router.get('/add', function(req, res, next) {
  res.render('libros-add', { title: 'Creación de libros' });
  rest.end();
}).post('/add', function(req, res, next){
  console.log('Comienzo POST - add');
  console.log(req.body);
  console.log('Comienzo POST - add');
  res.end();
});
*/

/*
router.get('/edit/:id', function(req, res, next) {
  var miLibro = misLibros[req.params.id - 1];
  res.render('libros-edit', { title: 'Edición de libros', libro:  miLibro});
  res.end();
}).post('/edit/:id', function(req, res, next){
  console.log('Comienzo POST - edit');
  console.log(req.body);
  console.log('Fin POST - edit');
  res.render('libros-show', { title: 'Libro ' + req.body.titulo + ' editado', libro: req.body});
  res.end();
});
*/

/*
router.get('/delete/:id', function(req, res, next) {
  var miLibro = misLibros[req.params.id - 1];
  res.render('libros-delete', { title: 'Borrar libro', libro: miLibro });
  res.end();
}).post('/delete/:id', function(req, res, next){
  var miLibro = misLibros[req.params.id - 1];
  res.render('libros-delete-success', { title: 'Borrar libro', libro: miLibro });
  res.end();
});
*/

/*
router.get('/', function(req, res, next) {
  var libros = misLibros;
  res.render('libros', { title: 'Listado de libros', libros: libros });
  res.end();
});

router.get('/:id', function(req, res, next) {
  var miLibro = misLibros[req.params.id - 1];
  res.render('libros-show', { libro: miLibro });
  res.end();
});
*/

module.exports = router;
