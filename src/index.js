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
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { LoadingComponent } from './components/common';
import Nav from './components/common/Nav';

import Library from './components/pages/Admin/Library';
import EditLibrary from './components/pages/Admin/EditLibrary';
import { VillageDashboard } from './components/pages/Dashboard';
import AddLibrary from './components/pages/Admin/AddLibrary';
import Village from './components/pages/Village/Village';
import EditVillage from './components/pages/Village/EditVillage';
import { EditHeadmasterProfile } from './components/pages/HeadmasterProfile';
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="edit-headmaster" component={EditHeadmasterProfile} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/admin/library" component={Library} exact />
        <Route path="/admin/library/add" component={AddLibrary} exact />
        <Route path="/admin/library/:id" component={EditLibrary} exact />
        <Route path="/village" component={Village} exact />
        <Route path="/village/:id" component={EditVillage} exact />

        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <Route
          path="/"
          exact
          component={() => <LoginPage LoadingComponent={LoadingComponent} />}
        />
        <Route path="/edit-headmaster" component={EditHeadmasterProfile} />
        <Route path="/dashboard" component={VillageDashboard} />

        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
