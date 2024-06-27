import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Root from './Root';

export default function ProtectedRoute() {
  const { token, user } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Root user={user} />;
}
