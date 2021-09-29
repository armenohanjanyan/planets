import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import { useUserAuth } from '../../hooks/useUserAuth';

const GuestRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated] = useUserAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(push(routes.planets.path));
    }
  }, [dispatch, isAuthenticated]);

  return !isAuthenticated ? (
    <Route {...rest} render={(...renderProps) => <Component {...renderProps} />} />
  ) : null;
};

export default GuestRoute;
