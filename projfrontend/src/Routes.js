import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubAdminRoute from './auth/helper/SubAdminRoutes';
import AdminRoute from './auth/helper/AdminRoutes';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import subAdminDashBoard from './user/subAdminDashboard';
import AdminDashBoard from './user/AdminDashBoard';
import CreatePatient from './subAdmin/createPatient';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <SubAdminRoute
          path="/subadmin/dashboard"
          exact
          component={subAdminDashBoard}
        />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <SubAdminRoute
          path="/subadmin/create/patient"
          exact
          component={CreatePatient}
        />
      </Switch>
    </Router>
  );
};

export default routes;
// const [values, setvalues] = useState({
//   name: '',
//   age: '',
//   sex: '',
//   address: '',
//   phone: '',
//   disease: '',
//   sysmptoms: '',
//   email: '',
//   loading: false,
//   error: '',
//   getaRedirect: false,
//   formData: '',
// });
