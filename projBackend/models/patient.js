const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    disease: {
      type: String,
      required: true,
    },
    sysmptoms: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Patient', PatientSchema);
