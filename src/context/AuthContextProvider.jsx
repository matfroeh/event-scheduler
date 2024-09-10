import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (loginData) => {
    try {
      const { emailValue, passwordValue } = loginData;

      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      } else {
        const user = await response.json();

        console.log(`User logged in:`, user);

        setUser(user.user);
        setToken(user.token);
        setAuth(true);
        return user;
      }
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, user, setUser, token, setToken, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
