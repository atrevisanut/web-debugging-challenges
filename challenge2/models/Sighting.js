var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var birdSchema = require('./BirdSchema')

var sightingSchema = new Schema({
  user: { type: String},
  bird: {type:String},
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});



module.exports = mongoose.model('Sighting', sightingSchema);
