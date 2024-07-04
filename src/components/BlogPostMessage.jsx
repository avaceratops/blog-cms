import { Link } from 'react-router-dom';
import { createBlogExcerpt } from '../utils/formatting';
import styles from '../styles/BlogPost.module.scss';

export default function BlogPostMessage({ id, message }) {
  return (
    <p>
      {createBlogExcerpt(message, 50)}{' '}
      <Link to={`/post/${id}`}>
        <span className={styles.expand}>...edit</span>
      </Link>
    </p>
  );
}
