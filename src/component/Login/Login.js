import React from "react";
import { Link } from "react-router-dom";
import login from "../../images/logo2.png";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-form d-flex justify-content-center flex-column align-items-center">
      <img src={login} alt="" height={60} className="mb-3" />
      <form action="">
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="password" /> <br />
        <input type="submit" value="Login" className="bg-danger text-white" />
      </form>
      <Link to="/signup" className="text-decoration-none">
        <p className="text-danger">No Account? Please SignUp</p>
      </Link>
    </div>
  );
};

export default Login;
