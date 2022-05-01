import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../Partials/SocialLogin/SocialLogin";
const Login = () => {

  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const Loading = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (user) {
    navigate('/')
  }

  return (
    <div className="my-5">
      <div className="card max-w-sm mx-auto">
        {loading ? <Loading /> :
          <div className="block p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl text-center mb-5">Login</h2>
            <form autoComplete="off">
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="input-custom"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputPassword2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="input-custom"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="input-button">
                Sign in
              </button>

              <div className="social-login">
                <SocialLogin />
              </div>

              <p className="text-gray-800 mt-6 text-center">
                Not a member?
                <Link
                  to="/register"
                  className="text-primary pl-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;
