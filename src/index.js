import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import Nav from './components/common/Nav';

import Library from './components/pages/Admin/Library';
import EditLibrary from './components/pages/Admin/EditLibrary';
import { VillageDashboard } from './components/pages/Dashboard';
import AddLibrary from './components/pages/Admin/AddLibrary';

import Login from './components/pages/Login/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Village from './components/pages/Village/Village';
import EditVillage from './components/pages/Village/EditVillage';

import { UserProvider } from './state/UserContext';
import RenderHomePage from './components/pages/Home/RenderHomePage';
import Logout from './components/pages/Logout/Logout';
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  const history = useHistory();

  return (
    <>
      <UserProvider>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

          <Route path="/landing" component={LandingPage} />

          <PrivateRoute path="/admin/library" component={Library} exact />
          <PrivateRoute
            path="/admin/library/add"
            component={AddLibrary}
            exact
          />
          <PrivateRoute
            path="/admin/library/:id"
            component={EditLibrary}
            exact
          />
          <PrivateRoute path="/village" component={Village} exact />
          <PrivateRoute path="/village/:id" component={EditVillage} exact />

          <Route
            path="/"
            exact
            component={() => <Login LoadingComponent={LoadingComponent} />}
          />
          <Route path="/dashboard" component={VillageDashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </UserProvider>
    </>
  );
}
