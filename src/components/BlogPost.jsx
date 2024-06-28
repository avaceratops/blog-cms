import BlogPostMeta from './BlogPostMeta';
import BlogPostMetaFull from './BlogPostMetaFull';
import BlogPostTitle from './BlogPostTitle';
import BlogPostMessage from './BlogPostMessage';
import BlogPostStatus from './BlogPostStatus';

export default function BlogPost({ post, excerpt }) {
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
        <BlogPostStatus published={post.timestamps.published} />
      </section>
    </article>
  );
}
