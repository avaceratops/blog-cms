import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import api from '../utils/api';

export default function LoginForm() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/login`, formData);

      if (response.status === 200) {
        setToken(response.data.token, response.data.user);
        navigate('/');
      }
    } catch (err) {
      if (err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else if (err.response.data.error) {
        setErrors([{ msg: err.response.data.error }]);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-fit min-w-96 flex-col gap-2">
      <label htmlFor="username">
        Username
        <input
          value={formData.username}
          onChange={handleChange}
          className="mt-0.5 block w-full rounded bg-neutral-700 p-2"
          type="text"
          name="username"
          id="username"
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          value={formData.password}
          onChange={handleChange}
          className="mt-0.5 block w-full rounded bg-neutral-700 p-2"
          type="password"
          name="password"
          id="password"
          required
        />
      </label>

      <button
        className="self-end rounded border border-neutral-500 px-4 py-2 hover:bg-neutral-700"
        type="submit"
      >
        Login
      </button>

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
