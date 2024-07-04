import { Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import useBlogPosts from '../hooks/useBlogPosts';

export default function Posts() {
  const { data, isLoading, isError } = useBlogPosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  if (data.posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <section className="flex flex-col gap-12">
      <Link
        to="/post/new"
        className="hover:bg-neutral-7 00 self-start rounded border border-violet-300 px-4 py-2
          text-violet-300 hover:border-violet-400 hover:text-violet-400"
      >
        Add new post
      </Link>

      {data.posts.map((post) => (
        <BlogPost key={post._id} post={post} excerpt={true} />
      ))}
    </section>
  );
}
