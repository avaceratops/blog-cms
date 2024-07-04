import { DateTime } from 'luxon';
import useAuth from '../hooks/useAuth';
import { getLocalTime } from '../utils/formatting';
import BlogPostForm from '../components/BlogPostForm';

export default function CreatePost() {
  const { user } = useAuth();

  const defaults = {
    title: '',
    author: {
      username: user,
    },
    timestamps: {
      published: getLocalTime(DateTime.now()),
    },
    message: '',
  };

  return <BlogPostForm post={defaults} />;
}
