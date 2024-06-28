import { DateTime } from 'luxon';
import styles from '../styles/BlogPost.module.scss';

export default function BlogPostStatus({ published }) {
  const publishedTime = DateTime.fromISO(published);

  if (DateTime.now() > publishedTime) {
    return <p className={styles['status--published']}>Published</p>;
  }
  return <p className={styles['status--unpublished']}>Awaiting publication date</p>;
}
