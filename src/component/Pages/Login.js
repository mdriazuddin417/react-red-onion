import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

import Loading from "../../Shared/Loading";
const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (error) {
    toast.error(`${error.message}`);
  }
  if (loading) {
    return <Loading />;
  }

  if (user) {
    toast.success("Login success");
    navigate("/breakfast");
  }
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <img
            src="https://i.ibb.co/V9XXSGR/pxfuel-com-6.jpg"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <form class="card-body" onSubmit={handleLogin}>
            <h3 className="text-2xl font-bold">Sign Up</h3>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                name="email"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
                name="password"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div class="divider">OR</div>
          <button class="btn btn-primary" onClick={() => signInWithGoogle()}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
