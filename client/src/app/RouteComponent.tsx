import App from './App';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('@/pages/MainPage/MainPage'));
const SignIn = lazy(() => import('@/pages/SignInPage/SignInPage'));
const SignUp = lazy(() => import('@/pages/SignUpPage/SignUpPage'));
const User = lazy(() => import('@/pages/UserPage/UserPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'signIn',
        element: <SignIn />,
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
]);

export default router;
