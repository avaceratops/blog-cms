import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoginForm from '../components/LoginForm';
import PageNotFound from '../components/PageNotFound';
import Post from './Post';
import Posts from './Posts';
import ProtectedRoute from './ProtectedRoute';
import Root from './Root';

export default function Routes() {
  const { token } = useAuth();

  const unprotectedRoutes = [
    {
      path: '/login',
      element: <Root />,
      children: [
        {
          path: '/login',
          element: <LoginForm />,
        },
      ],
    },
  ];

  const protectedRoutes = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Posts />,
        },
        {
          path: '/post/:postId',
          element: <Post />,
        },
        {
          path: '/*',
          element: <PageNotFound />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...(!token ? unprotectedRoutes : []), ...protectedRoutes]);

  return <RouterProvider router={router} />;
}
