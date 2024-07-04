import { useState } from 'react';
import BlogPostForm from './BlogPostForm';
import BlogPostMeta from './BlogPostMeta';
import BlogPostTitle from './BlogPostTitle';
import BlogPostMessage from './BlogPostMessage';
import BlogPostStatus from './BlogPostStatus';
import HideButton from './HideButton';

export default function BlogPost({ post, excerpt }) {
  const [hidden, setHidden] = useState(post.hidden);

  function toggleHidden() {
    setHidden(!hidden);
  }

  if (excerpt) {
    return (
      <article className="flex flex-col gap-1 xs:flex-row xs:gap-4">
        <BlogPostMeta published={post.timestamps.published} username={post.author.username} />

        <section>
          <BlogPostTitle title={post.title} />
          <BlogPostMessage id={post._id} message={post.message} />

          <div className="flex gap-1">
            <BlogPostStatus published={post.timestamps.published} hidden={hidden} />
            <HideButton id={post._id} hidden={hidden} toggleHidden={toggleHidden} />
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className="flex w-full flex-col gap-1 xs:gap-4">
      <BlogPostForm post={post} editing={true} />
    </article>
  );
}
