const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 3,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 3,
  },

  uemail: {
    type: String,
    required: true,
    unique: [true, 'Email id is already present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },

  upass: {
    type: String,
    required: true,
    minlength: 5,
  },

  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: [true, 'This phone number is already present.'],
  },

  hemail1: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },

  hemail2: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },

  hemail3: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },
});

// creating a new collection
const Person = new mongoose.model('Person', personSchema);

//Exporting the model
module.exports = Person;
