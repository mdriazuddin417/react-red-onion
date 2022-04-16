import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../images/logo2.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-form d-flex justify-content-center flex-column align-items-center">
      <img src={login} alt="" height={60} className="mb-3" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          value={confrimPassword}
          onChange={(event) => setConfrimPassword(event.target.value)}
        />{" "}
        <br />
        <input type="submit" value="SignUp" className="bg-danger text-white" />
      </form>
      <Link to={"/login"} className="text-decoration-none">
        <p className="text-danger">Already have an Account</p>
      </Link>
    </div>
  );
};

export default Signup;
