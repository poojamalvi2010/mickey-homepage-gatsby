import React, {useState, useEffect, useContext, createContext} from "react";
import axiosInstance from "./axiosApi";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (username, password) => {
    try {
      setError(false)
      setUser(null);

      let response = await axiosInstance.post('main/token/obtain/', {
        email: username,
        password: password
      });

      axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      return response
    } catch (error) {
      setError(true)
    }
    return false
  };
  const signup = (email, password) => {
    console.log('sign up')
  };
  const signout = async () => {
    try {
      const response = await axiosInstance.post('/main/blacklist/', {
        "refresh_token": localStorage.getItem("refresh_token")
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
    } catch (e) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
    }
  };
  const sendPasswordResetEmail = (email) => {
    console.log('password reset')
  };
  const confirmPasswordReset = (code, password) => {
    console.log('confirm password reset')
  };

  const isLoggedIn = async () => {
    try {
      let response = await axiosInstance.post('main/token/verify/');
      if (response && response.data && response.data.success) {
        return response;
      }
    } catch {
    }
    setUser(false);
    return false;
  }

  // Return the user object and auth methods
  return {
    user,
    setUser,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    error,
    isLoggedIn,
  };
}