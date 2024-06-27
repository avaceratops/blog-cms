import { useMemo, useReducer } from 'react';
import AuthContext from '../contexts/AuthContext';
import authReducer from '../reducers/authReducer';

const initialData = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialData);

  const setToken = (token, user) => {
    dispatch({ type: 'setToken', payload: { token, user } });
  };

  const clearToken = () => {
    dispatch({ type: 'clearToken' });
  };

  // memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      ...state,
      setToken,
      clearToken,
    }),
    [state]
  );

  // provide authentication context to child components
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
