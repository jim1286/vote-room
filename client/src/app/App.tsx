import { Loading } from "@/components";
import { setUser } from "@/flux";
import { useAuth } from "@/hooks";
import { TokenService } from "@/service";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const token = TokenService.getTokens();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getUser, signOut } = useAuth();

  useEffect(() => {
    if (!token) {
      signOut();
      navigate("/login");

      return;
    }

    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const user = await getUser();

      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      signOut();
      console.log(error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default App;
