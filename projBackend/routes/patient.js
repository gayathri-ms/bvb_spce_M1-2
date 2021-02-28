const express = require('express');
const router = express.Router();

const {
  getPatientById,
  createPatient,
  getPatient,

  deletePatient,
  updatePatient,
  getAllPatients,
} = require('../controllers/patient');

const { getUserById } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');

//parm
router.param('userId', getUserById);
router.param('patientId', getPatientById);

//create routes
router.post(
  '/patient/create/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createPatient
);

//read routes
router.get('/patient/:patientId', getPatient);

//delete and update routes
router.delete(
  '/patient/:patientId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deletePatient
);
router.put(
  '/patient/:patientId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updatePatient
);

//listing routes
router.get('/patients', getAllPatients);

module.exports = router;
