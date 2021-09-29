import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/user/actions';

export function useUserAuth() {
  const isAuthenticated = !!useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const setUserState = (user) => {
    dispatch(setUser(user));
  };

  return [isAuthenticated, setUserState];
}
