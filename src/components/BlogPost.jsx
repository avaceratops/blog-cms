import { useState } from 'react';
import BlogPostMeta from './BlogPostMeta';
import BlogPostMetaFull from './BlogPostMetaFull';
import BlogPostTitle from './BlogPostTitle';
import BlogPostMessage from './BlogPostMessage';
import BlogPostStatus from './BlogPostStatus';
import HideButton from './HideButton';

export default function BlogPost({ post, excerpt }) {
  const [hidden, setHidden] = useState(post.hidden);

  function toggleHidden() {
    setHidden(!hidden);
  }

  return (
    <article className="flex flex-col gap-1 xs:flex-row xs:gap-4">
      {excerpt && (
        <BlogPostMeta published={post.timestamps.published} username={post.author.username} />
      )}

      <section>
        <BlogPostTitle title={post.title} />
        {!excerpt && (
          <BlogPostMetaFull published={post.timestamps.published} username={post.author.username} />
        )}
        <BlogPostMessage id={post._id} message={post.message} excerpt={excerpt} />

        <div className="flex gap-1">
          <BlogPostStatus published={post.timestamps.published} hidden={hidden} />
          <HideButton id={post._id} hidden={hidden} toggleHidden={toggleHidden} />
        </div>
      </section>
    </article>
  );
}
