import React from 'react';
import Base from '../core/Base';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
const subAdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="container">
        <Link to="/subadmin/create/patient" className="nav-link text-danger">
          <h3>create Patients Account</h3>
        </Link>
        <Link to="/subadmin/update/patient" className="nav-link text-danger">
          <h3>Update Patient Account</h3>
        </Link>
        <Link to="/subadmin/delete/patient" className="nav-link text-danger">
          <h3>Delete Patient Account</h3>
        </Link>
      </div>
    );
  };
  const adminRightSide = () => {
    return (
      <div className="card mb-5">
        <h4 className="card-header">Admin info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success ">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger ">Admin area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base title="SubAdmin" className="container  p-4">
      <div className="row">
        <div className="col-4"> {adminLeftSide()}</div>
        <div className="col-8"> {adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default subAdminDashboard;
