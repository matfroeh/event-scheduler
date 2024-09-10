import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const emailValue = "user@example.com";
      const passwordValue = "password123";
      await login({ emailValue, passwordValue });

      if (login.error) {
        console.log("Login error");
        return;
      } else {
        navigate("/auth");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>Login Page</div>
      <button to="/auth" className="btn btn-primary" onClick={handleLogin}>
        Login (with predefined test userData in Login.jsx)
      </button>
    </div>
  );
}

export default Login;
