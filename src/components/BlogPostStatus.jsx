import { DateTime } from 'luxon';
import styles from '../styles/BlogPost.module.scss';

export default function BlogPostStatus({ published, hidden }) {
  const publishedTime = DateTime.fromISO(published);

  if (hidden) {
    return <p className={styles['status--hidden']}>Hidden</p>;
  }
  if (DateTime.now() > publishedTime) {
    return <p className={styles['status--published']}>Published</p>;
  }
  return <p className={styles['status--unpublished']}>Awaiting publication date</p>;
}
