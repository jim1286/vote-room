import { removeUser } from "@/flux";
import { SignInInfo } from "@/interface";
import { AuthService, TokenService, UserService } from "@/service";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const user = await UserService.getUser();

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

  return { signIn, signOut, getUser };
};

export default useAuth;
