import React from "react";

const Login = () => {
  return (
    <div className="my-5">
      <div className="card max-w-sm mx-auto">
     
        <div className="block p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl text-center mb-5">Login</h2>
          <form autocomplete="off">
            <div className="form-group mb-6">
              <label
                for="exampleInputEmail2"
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
                for="exampleInputPassword2"
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
                  for="exampleCheck2"
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
            <p className="text-gray-800 mt-6 text-center">
              Not a member?{" "}
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
