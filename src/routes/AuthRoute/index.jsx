import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import { useUserAuth } from '../../hooks/useUserAuth';

const AuthRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated] = useUserAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(push(routes.signIn.path));
    }
  }, [dispatch, isAuthenticated]);

  return isAuthenticated ? (
    <Route {...rest} render={(...renderProps) => <Component {...renderProps} />} />
  ) : null;
};

export default AuthRoute;
