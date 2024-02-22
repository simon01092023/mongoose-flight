
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const dDate = new Date()
dDate.setDate(dDate.getDate() + 365);

const destinationSchema = new Schema({
  airport: {
    type: String,
    required: true
  },
  arrival: {
    type: Date,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  }
}, {
  timestamps: true
})


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['AAA', 'SWA', 'UAA']

  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 1000,
    max: 9999
  },

  departs: {
    type: Date,
    default: dDate
  },
  reviews: [destinationSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Flight', flightSchema);