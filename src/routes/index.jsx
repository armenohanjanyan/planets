import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages Import */

import SignIn from '../pages/SignIn';

/* Routes Import */
import GuestRoute from './GuestRoute';
import routes from './routesCode';

/* Other Imports */
import suspense from '../hocs/suspense';
import AuthRoute from './AuthRoute';

const NotFound = lazy(() => import('../pages/NotFound'));
const Planet = lazy(() => import('../pages/Planet'));
const Planets = lazy(() => import('../pages/Planets'));

const Routes = () => (
  <Switch>
    {/* <Redirect from="/" to="/signIn" /> */}
    <AuthRoute
      path={routes.planets.path}
      exact={routes.planets.exact}
      component={suspense(Planets)}
    />

    <GuestRoute path={routes.signIn.path} exact={routes.signIn.exact} component={SignIn} />
    <AuthRoute path={routes.planet.path} exact={routes.planet.exact} component={suspense(Planet)} />

    <Route exact={true} path={'*'} component={suspense(NotFound)} />
  </Switch>
);

export default Routes;
