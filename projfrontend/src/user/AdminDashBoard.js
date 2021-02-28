import React from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper/index';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="container">
        <Link to="/admin/create/product" className="nav-link text-danger">
          <h3> View all Patients</h3>
        </Link>
        <Link to="/admin/create/statics" className="nav-link text-danger">
          <h3> Statistics</h3>
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
    <Base title="AdminDashBoard" className="container  p-4">
      <div className="row">
        <div className="col-4"> {adminLeftSide()}</div>
        <div className="col-8"> {adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
