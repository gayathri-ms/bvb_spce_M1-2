const express = require('express');
const router = express.Router();

const {
  getPatientById,
  createPatient,
  getPatient,

  deletePatient,
  updatePatinet,
  getAllPatients,
} = require('../controllers/patient');

const { getUserById } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');

//parm
router.param('userId', getUserById);
router.param('patient', getPatientById);

//create routes
router.post(
  '/patinet/create/:userId',
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
  '/patinet/:patinetId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updatePatinet
);

//listing routes
router.get('/patients', getAllPatients);

module.exports = router;
