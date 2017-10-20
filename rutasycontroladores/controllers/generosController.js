var Genero = require('../models/genero');

// Display list of all books
exports.genero_list = function(req, res) {
    //Al llamar a la funcion lean() quitamos getters y setters, funciones, etc
    Genero.find({}, '_id nombre titulo')
      .lean()
      .exec(function (err, list_generos) {
        if (err) { return next(err); }
        //Successful, so render
        //console.log(list_generos);
        res.render('generos', {
          generos: list_generos,
          title: "Listado de géneros"
        });
      });
    /*
    var libros = misLibros;
    res.render('libros', { title: 'Listado de libros', libros: libros });
    res.end();
    */
};
