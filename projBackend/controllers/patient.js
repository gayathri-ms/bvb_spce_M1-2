const Patient = require('../models/patient');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.getPatientById = (req, res, next, id) => {
  Patient.findById(id)
    //.populate('Report')
    .exec((err, patient) => {
      if (err) {
        return res.status(404).json({
          error: 'product not found',
        });
      }
      req.patient = patient;
      next();
    });
};

exports.createPatient = (req, res) => {
  console.log('CREATE PATIENT AT LINE 21');
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, feilds, file) => {
    if (err) {
      return res.status(404).json({
        error: 'problem with the image',
      });
    }
    console.log(feilds);
    //destructuring the feilds
    const {
      name,
      age,
      email,
      address,
      sex,
      disease,
      sysmptoms,
      phone,
    } = feilds;
    // console.log(name);
    if (
      !name ||
      !age ||
      !email ||
      !sex ||
      !sysmptoms ||
      !phone ||
      !address ||
      !disease
    ) {
      console.log('missing some details ');
      return res.status(404).json({
        error: 'ALL deatils must be included',
      });
    }

    let patient = new Patient(feilds);

    patient.save((err, patient) => {
      if (err) {
        res.status(400).json({
          error: 'saving in the db failed!',
        });
      }
      res.json(patient);
    });
  });
};
exports.getPatient = (req, res) => {
  req.patient.photo = undefined;
  return res.json(req.product);
};
// exports.photo = (req, res, next) => {
//   if (req.product.photo.data) {
//     res.set('Content-Type', req.product.photo.contentType);
//     return res.send(req.product.photo.data);
//   }
//   next();
// };
exports.deletePatient = (req, res) => {
  let patinet = req.patient;

  patinet.remove((err, deletedPatinet) => {
    if (err) {
      return res.status(400).json({
        error: `unable to remove product ${deletedPatinet}`,
      });
    }
    res.json({
      message: `successfuly deleted the product ${deletedPatinet}`,
    });
  });
};

exports.updatePatinet = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, feilds, file) => {
    if (err) {
      return res.status(404).json({
        error: 'problem with the image',
      });
    }

    //updation code
    let patinet = req.patinet;
    patinet = _.extend(patinet, feilds);

    //handle file here
    // if (file.photo) {
    //   if (file.photo.status > 3000000) {
    //     return res.status(400).json({
    //       error: 'file size is too big!',
    //     });
    //   }
    //   console.log(file.photo.path);
    //   product.photo.data = fs.readFileSync(file.photo.path);
    //   product.photo.contentType = file.photo.type;
    // }
    //save to the db

    patient.save((err, patinet) => {
      if (err) {
        res.status(400).json({
          error: 'unable to update',
        });
      }
      return res.json(patinet);
    });
  });
};
exports.getAllPatients = (req, res) => {
  let limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  Patient.find()
    .sort([[sortBy, 'asc']])
    .limit(limit)
    .exec((err, patients) => {
      if (err) {
        return res.status(404).json({
          err: 'no products are found',
        });
      }
      res.json(patients);
    });
};
