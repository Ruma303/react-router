/* import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('auth')));

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuthenticated(Boolean(auth));
  }, []);

  const login = () => {
    localStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
} */

import { useState, useEffect } from "react";
export default function useAuth() {
    const [user, setUser] = React.useState(null);

    const signIn = (cb) => {
        setUser({ name: 'User' });
        cb();
    };

    const signOut = (cb) => {
        setUser(null);
        cb();
    };

    return {
        user,
        signIn,
        signOut,
    };
};