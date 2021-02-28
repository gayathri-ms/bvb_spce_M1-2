import { API } from '../../backend';

export const createPatient = (userId, token, patient) => {
  console.log('TOKEN', token);
  return fetch(`${API}/patient/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: patient,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
//get a patient
///patient/:patientId
export const getPatient = (patientId) => {
  return fetch(`${API}/patient/${patientId}`, {
    method: 'GET',
  })
    .then((response) => {
      // console.log('RES :', response);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

//get all categories

// delete patient
export const deletePatient = (patientId, userId, token) => {
  return fetch(`${API}/patient/${patientId}/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// products calls
//create products

//get allproducts
export const getAllPatients = () => {
  return fetch(`${API}/products`, {
    method: 'GET',
  })
    .then((response) => {
      console.log('RESPONSE AT LINE 58' + response);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
//delete products

//get a products

//update products
export const updatePatient = (patientId, userId, token, patient) => {
  return fetch(`${API}/patient/${patientId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: patient,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
