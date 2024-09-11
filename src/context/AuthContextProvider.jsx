import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const logout = () => {
    setAuth(false);
    setUser(null);
    setToken(null);
  };

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
        login.ok = false;
        // console.log(login.ok);
        
        const { error } = await response.json();  
        // console.log(error);          
        throw new Error(error);
      } else {
        login.ok = true;
        // console.log(login.ok);

        const userData = await response.json();
        console.log(`User logged in:`, userData);
        setUser(userData.user);
        setToken(userData.token);
        setAuth(true);
        return userData;
      }
    } catch (error) {
      // console.log("Login error", error);
      return { error };
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, user, setUser, token, setToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
