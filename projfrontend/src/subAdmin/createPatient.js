import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { createPatient } from './helper/subadminApicalls';
import { isAuthenticated } from '../auth/helper/index';

const CreatePatient = () => {
  const { user, token } = isAuthenticated();

  const [values, setvalues] = useState({
    name: '',
    age: '',
    sex: '',
    address: '',
    phone: '',
    disease: '',
    sysmptoms: '',
    email: '',
    loading: false,
    error: '',
    getaRedirect: false,
    formData: '',
    createdPatient: '',
  });
  const {
    name,
    age,
    sex,
    address,
    phone,
    disease,
    sysmptoms,
    email,
    loading,
    error,
    getaRedirect,
    formData,
    createdPatient,
  } = values;
  const preload = () => {
    setvalues({ ...values, formData: new FormData() });
  };
  useEffect(() => {
    preload();
  }, []);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    // formData.set(name, value);
    //based on whatever the name is the values are given
    setvalues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //refresing the errors
    setvalues({ ...values, error: '', loading: true });

    console.log('FORM DATA', formData);
    createPatient(user._id, token, formData).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error });
      } else {
        setvalues({
          ...values,
          name: '',
          age: '',
          sex: '',
          address: '',
          phone: '',
          disease: '',
          sysmptoms: '',
          email: '',

          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };
  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdPatient ? '' : 'none' }}
      >
        <h4>{createdPatient} created successfully</h4>
      </div>
    );
  };
  const createPatientForm = () => (
    <form>
      <div className="form-group my-3">
        <input
          onChange={handleChange('name')}
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group my-3">
        <input
          onChange={handleChange('email')}
          name="email"
          className="form-control"
          placeholder="email"
          value={email}
        />
      </div>
      <div className="form-group my-3">
        <input
          onChange={handleChange('disease')}
          name="disease"
          className="form-control"
          placeholder="disease"
          value={disease}
        />
      </div>
      <div className="form-group my-3">
        <input
          onChange={handleChange('sysmptoms')}
          name="sysmptoms"
          className="form-control"
          placeholder="sysmptoms"
          value={sysmptoms}
        />
      </div>
      <div className="form-group my-3">
        <textarea
          onChange={handleChange('sex')}
          name="sex"
          className="form-control"
          placeholder="sex"
          value={sex}
        />
      </div>
      <div className="form-group my-3">
        <textarea
          onChange={handleChange('address')}
          name="address"
          className="form-control"
          placeholder="address"
          value={address}
        />
      </div>
      <div className="form-group my-3">
        <textarea
          onChange={handleChange('phone')}
          name="phone"
          className="form-control"
          type="number"
          placeholder="phone"
          value={phone}
        />
      </div>
      <div className="form-group my-3">
        <input
          onChange={handleChange('age')}
          type="number"
          className="form-control"
          placeholder="age"
          value={age}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Patient
      </button>
    </form>
  );
  return (
    <Base
      title="Add Product"
      description="products are being added here"
      className="container bg-success p-4 mb-5 "
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createPatientForm()}
        </div>
      </div>
    </Base>
  );
};

export default CreatePatient;
