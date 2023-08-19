import App from "./App";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import { MainPage, SignInPage, SignUpPage, UserPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <SignInPage />,
      },
      {
        path: "auth",
        element: <SignUpPage />,
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "info",
            element: <UserPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
