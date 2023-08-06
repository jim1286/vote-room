import { removeUser } from '@/flux';
import { SignInInfo } from '@/interface';
import { AuthService, TokenService } from '@/service';
import { useDispatch } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch();

  const initAuth = async () => {};

  const getUser = async () => {
    const user = await AuthService.getUser();

    return user;
  };

  const signIn = async (signInInfo: SignInInfo) => {
    const tokens = await AuthService.signIn(signInInfo);

    return tokens;
  };

  const signOut = () => {
    TokenService.removeToken();
    dispatch(removeUser());
  };

  return { initAuth, signIn, signOut, getUser };
};

export default useAuth;
