import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBlogPost from '../hooks/useBlogPost';
import BlogPost from '../components/BlogPost';
import CommentSection from '../components/CommentSection';
import GoBack from '../components/GoBack';

export default function Post() {
  const { postId } = useParams();
  const { data, isLoading, isError } = useBlogPost(postId);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (data.post && data.post.comments) {
      setComments(data.post.comments);
    }
  }, [data]);

  function removeComment(commentId) {
    const updatedComments = comments.filter((comment) => comment._id !== commentId);
    setComments(updatedComments);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading post</div>;

  const { post } = data;

  return (
    <>
      <GoBack />
      <BlogPost key={post._id} post={post} excerpt={false} />
      <CommentSection postId={post._id} comments={comments} removeComment={removeComment} />
    </>
  );
}
