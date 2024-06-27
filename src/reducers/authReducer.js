import axios from 'axios';

export default function authReducer(state, action) {
  switch (action.type) {
    case 'setToken':
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', action.payload.user);
      return { ...state, token: action.payload.token, user: action.payload.user };
    case 'clearToken':
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { ...state, token: null, user: null };
    default:
      console.error(`Invalid action ${action.type}`);
  }
}
