var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema = Schema({
  titulo: {type: String, required: true},
  //autores: {type: Schema.ObjectId, ref: 'Author', required: true},
  autores: {type: String, required: true},
  sinopsis: {type: String, required: true},
  isbn: {type: String, required: true},
  //genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});

// Virtual for book's URL
LibroSchema
.virtual('url')
.get(function () {
  return '/libros/' + this._id;
});
//Export model
module.exports = mongoose.model('Libro', LibroSchema);
