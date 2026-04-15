import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("aiml-user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const saveUser = (data) => {
    localStorage.setItem("aiml-user", JSON.stringify(data));
    setUser(data);
  };

  const signup = (email, password) => {
    const newUser = {
      email,
      password,
      xp: 0,
      history: []
    };
    saveUser(newUser);
  };

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("aiml-user"));
    if (saved?.email === email && saved?.password === password) {
      setUser(saved);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("aiml-user");
    setUser(null);
  };

  const addActivity = (type, title) => {
    if (!user) return;

    const updated = {
      ...user,
      xp: user.xp + 10,
      history: [
        { type, title, date: new Date().toLocaleString() },
        ...user.history
      ]
    };

    saveUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, addActivity }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
