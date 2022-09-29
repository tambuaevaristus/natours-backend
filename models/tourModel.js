const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour must have a in name'],
    unique: true,
    trim: true,
  },
  duration:{
    type: Number,
    required: [true, 'Tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Tour must have a max group size'],
  },
  difficulty:{
    type: String,
    required: [true, 'Tour must have a dificuty'],
  },
  ratingsAverage:{
    type: Number,
    default: 4.5
  },
  ratingsQuatity:{
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a price'],
  },
  priceDiscount:Number,
  summary:{
    type: String,
    trim: true
  }, 
  description:{
    type: String,
    trim: true,
  },
  imageCover:{
    type:String,
    required: [true, 'Image must bbe present']
  },
  image: [String],

  createdAt: {
    type:Date,
    default: Date.now()
  },
  startDate:[Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
