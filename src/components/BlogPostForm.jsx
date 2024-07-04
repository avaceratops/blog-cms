import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../utils/api';
import { getLocalTime } from '../utils/formatting';
import BlogPostField from './BlogPostField';

export default function BlogPostForm({ post, editing = false }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: post.title,
    author: post.author.username,
    published: getLocalTime(post.timestamps.published),
    message: post.message,
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (post._id) {
        response = await api.patch(`/post/${post._id}`, formData);
      } else {
        response = await api.post('/posts', formData);
      }

      if (response.status === 200) {
        setErrors([]);
      } else if (response.status === 201) {
        setErrors([]);
        navigate('/');
      }
    } catch (err) {
      if (err.response.data.errors) {
        setErrors(err.response.data.errors);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/post/${post._id}`);

      if (response.status === 200) {
        setErrors([]);
        navigate('/');
      }
    } catch (err) {
      if (err.response.data.errors) {
        setErrors(err.response.data.errors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
      <BlogPostField
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        labelText="Title"
        required={true}
      />

      <BlogPostField
        name="author"
        type="text"
        value={formData.author}
        onChange={handleChange}
        labelText="Author"
        className="w-[22ch]"
        required={true}
      />

      <BlogPostField
        name="published"
        type="datetime-local"
        value={formData.published}
        onChange={handleChange}
        labelText="Publish Time"
        required={true}
      />

      <BlogPostField
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        labelText="Message"
        required={true}
      />

      <section className="flex justify-end gap-2">
        {editing && (
          <button
            type="button"
            onClick={handleDelete}
            className="w-36 rounded border border-red-500 px-4 py-2 text-red-500
              hover:bg-neutral-700"
          >
            Delete post
          </button>
        )}

        <button
          type="submit"
          className="w-36 rounded border border-neutral-500 px-4 py-2 hover:bg-neutral-700"
        >
          {editing ? 'Save changes' : 'Create post'}
        </button>
      </section>

      {errors.length > 0 && (
        <section>
          <ul className="list-inside list-disc text-red-500">
            {errors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </section>
      )}
    </form>
  );
}
