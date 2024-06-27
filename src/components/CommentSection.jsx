import Comment from '../components/Comment';

export default function CommentSection({ comments }) {
  return (
    <section className="mt-8 flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-neutral-400">
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
      </h3>

      <div className="mt-4 flex flex-col gap-2">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
