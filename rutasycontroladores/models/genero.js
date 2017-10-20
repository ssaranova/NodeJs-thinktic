var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneroSchema = Schema({
  nombre: {type: String, required: true},
  edad: {type: String, required: true},
});

//Export model
module.exports = mongoose.model('Genero', GeneroSchema);
