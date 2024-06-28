import api from '../utils/api';
import useAuth from '../hooks/useAuth';
import styles from '../styles/BlogPost.module.scss';

export default function HideButton({ id, hidden, toggleHidden }) {
  const { clearToken } = useAuth();

  const handleClick = async () => {
    try {
      const response = await api.patch(`/post/${id}/hide`);

      if (response.status === 200) {
        toggleHidden();
      }
    } catch (err) {
      if (err.response.status === 403) {
        console.error('User must log back in');
        clearToken();
      } else {
        console.error('Unable to hide post', id);
      }
    }
  };

  return (
    <button className={styles['button--hide']} onClick={handleClick}>
      {hidden ? 'Show' : 'Hide'}
    </button>
  );
}
