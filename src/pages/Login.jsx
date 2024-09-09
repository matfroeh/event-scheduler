import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>Login Page</div>
      <Link to="/auth">Login if rndNumber {">"} 0.5</Link>
    </div>
  );
}

export default Login;
