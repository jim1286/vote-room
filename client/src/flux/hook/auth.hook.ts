import { useSelector } from 'react-redux';
import { RootState } from '..';

export const useAuthSelector = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return auth;
};

export const useUserSelector = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user;
};
