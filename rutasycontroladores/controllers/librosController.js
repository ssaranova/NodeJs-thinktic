var Libro = require('../models/libro');

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

// Display list of all books
exports.libro_list = function(req, res) {
    //res.send('NOT IMPLEMENTED: Book list');
    //Al llamar a la funcion lean() quitamos getters y setters, funciones, etc
    Libro.find({}, '_id isbn autores titulo sinopsis')
      .lean()
      .exec(function (err, list_books) {
        if (err) { return next(err); }
        //Successful, so render
        console.log(list_books);
        res.render('libros', {
          libros: list_books,
          title: "Listado de libros"
        });
      });
    /*
    var libros = misLibros;
    res.render('libros', { title: 'Listado de libros', libros: libros });
    res.end();
    */
};

// Display detail page for a specific book
exports.libro_show = function(req, res) {
  var id = req.params.id;
  Libro.findById(id)
    .select('_id isbn autores titulo sinopsis')
    .lean()
    .exec(function (err, miLibro) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('libros-show', { libro: miLibro });
      res.end();
    });
    /*
    //res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
    var miLibro = misLibros[req.params.id - 1];
    res.render('libros-show', { libro: miLibro });
    res.end();
    */
};

// Display book create form on GET
exports.libro_add_get = function(req, res) {
    //res.send('NOT IMPLEMENTED: Book create GET');
    res.render('libros-add', { title: 'Creación de libros' });
    rest.end();
};

// Handle book create on POST
exports.libro_add_post = function(req, res) {

    var nuevoLibro = new Libro(req.body);
    //console.log(req.body);

    nuevoLibro.save(function(err){
      if(err) return next(err);
      //Genre saved. Redirect to genre detail page
      //res.redirect(genre.url);
      //console.log(libro);
      res.redirect("/libros/" + nuevoLibro._id);
    });
    /*
    //res.send('NOT IMPLEMENTED: Book create POST');
    console.log('Comienzo POST - add');
    console.log(req.body);
    console.log('Comienzo POST - add');
    res.end();
    */
};

// Display book delete form on GET
exports.libro_delete_get = function(req, res) {

  var id = req.params.id;
  Libro.findById(id)
    .exec(function (err, miLibro) {
      if (err) { return next(err); }
      //console.log(miLibro);
      //Successful, so render
      res.render('libros-delete', { libro: miLibro });
      res.end();
    });
  /*
    //res.send('NOT IMPLEMENTED: Book delete GET');
    var miLibro = misLibros[req.params.id - 1];
    res.render('libros-delete', { title: 'Borrar libro', libro: miLibro });
    res.end();
  */
};

// Handle book delete on POST
exports.libro_delete_post = function(req, res) {

  var id = req.params.id;
  Libro.findByIdAndRemove(id)
    .exec(function (err, miLibro) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('libros-delete-success', { title: 'Borrar libro', libro: miLibro });
      res.end();
    });
  /*
    //res.send('NOT IMPLEMENTED: Book delete POST');
    var miLibro = misLibros[req.params.id - 1];
    res.render('libros-delete-success', { title: 'Borrar libro', libro: miLibro });
    res.end();
  */
};

// Display book update form on GET
exports.libro_edit_get = function(req, res) {
  var id = req.params.id;
  Libro.findById(id)
    .exec(function (err, miLibro) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('libros-edit', { title: 'Edición del libro', libro: miLibro });
      res.end();
    });
    /*
    //res.send('NOT IMPLEMENTED: Book update GET');
    var miLibro = misLibros[req.params.id - 1];
    res.render('libros-edit', { title: 'Edición de libros', libro:  miLibro});
    res.end();
    */
};

// Handle book update on POST
exports.libro_edit_post = function(req, res) {

  var id = req.params.id;
  Libro.findByIdAndUpdate(id, {$set: req.body})
    .exec(function (err, miLibro) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('libros-show', { title: 'Libro' + req.body.titulo + ' editado', libro: req.body });
      res.end();
    });
  /*
    //res.send('NOT IMPLEMENTED: Book update POST');
    console.log('Comienzo POST - edit');
    console.log(req.body);
    console.log('Fin POST - edit');
    res.render('libros-show', { title: 'Libro ' + req.body.titulo + ' editado', libro: req.body});
    res.end();
    */
};
