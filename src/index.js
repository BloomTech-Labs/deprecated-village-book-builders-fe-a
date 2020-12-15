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

import { UserProvider } from './state/UserContext';
import RenderHomePage from './components/pages/Home/RenderHomePage';
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

          <Route path="/landing" component={LandingPage} />
          <Route path="/admin/library" component={Library} exact />
          <Route path="/admin/library/add" component={AddLibrary} exact />
          <Route path="/admin/library/:id" component={EditLibrary} exact />

          <Route
            path="/"
            exact
            component={() => (
              <RenderHomePage LoadingComponent={LoadingComponent} />
            )}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </UserProvider>
    </>
  );
}
