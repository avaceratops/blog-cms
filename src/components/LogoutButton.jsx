import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function LogoutButton() {
  const navigate = useNavigate();
  const { clearToken } = useAuth();

  const handleLogout = () => {
    clearToken();
    navigate('/login', { replace: true });
  };

  return (
    <button
      className="font-extralight text-violet-300 hover:text-violet-400"
      onClick={handleLogout}
    >
      log out
    </button>
  );
}
