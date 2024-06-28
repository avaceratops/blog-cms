import { DateTime } from 'luxon';
import api from '../utils/api';
import useAuth from '../hooks/useAuth';

export default function Comment({ postId, comment, removeComment }) {
  const { clearToken } = useAuth();
  const now = DateTime.now();
  const creationDate = DateTime.fromISO(comment.timestamps.created);
  const timeSince = creationDate.toRelative({ base: now });

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/post/${postId}/comment/${comment._id}`);

      if (response.status === 200) {
        removeComment(comment._id);
      }
    } catch (err) {
      if (err.response.status === 403) {
        console.error('User must log back in');
        clearToken();
      } else {
        console.error('Unable to delete comment', comment._id);
      }
    }
  };

  return (
    <article className="flex gap-4">
      <button onClick={handleDelete}>❌</button>
      <section>
        <p className="flex gap-3 text-neutral-400">
          <span>{comment.name}</span>{' '}
          <span className="font-light text-neutral-500">{timeSince}</span>
        </p>
        <p>{comment.message}</p>
      </section>
    </article>
  );
}
