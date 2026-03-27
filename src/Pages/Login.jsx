
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { useLoginMutation } from "../Services/api";
import { isAuthenticated, saveSession } from "../Services/auth";

const Login = () => {
  const [showToggle, setshowToggle] = useState(false);
  const [formData, setFormData] = useState({
    username: "emilys",
    password: "emilyspass",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/profile";

  if (isAuthenticated()) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await login({
        username: formData.username,
        password: formData.password,
        expiresInMins: 30,
      }).unwrap();

      saveSession(response);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setErrorMessage(error?.data?.message || "Login failed. Please try the demo credentials again.");
    }
  };

  return (
    <div className='w-full max-w-lg m-auto px-4 py-10 sm:px-6 md:mt-20'>
      <div
        style={{
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        className='bg-white rounded-lg shadow-xl overflow-hidden'>
        <div className='bg-indigo-700 text-white text-base font-bold justify-end inline-block px-2.5 py-1.5 rounded-2xl'>
          <Link to='/' className=' flex text-center items-center gap-1.5'>
            Back To Home <TbArrowBackUp className=' text-xl font-bold' />
          </Link>
        </div>
        <div className='p-8'>
          <h2 className='text-center text-3xl font-extrabold text-gray-700'>
            Welcome Back
          </h2>
          <p className='mt-4 text-center text-gray-400'>Sign in to continue</p>
          <div className='mt-6 rounded-2xl bg-secondary p-4 text-sm text-gray-600'>
            <p className='font-semibold text-gray-800'>Demo credentials</p>
            <p className='mt-1'>Username: <span className='font-bold'>emilys</span></p>
            <p>Password: <span className='font-bold'>emilyspass</span></p>
          </div>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm'>
              <div>
                <label className='sr-only' htmlFor='username'>
                  Username
                </label>
                <input
                  placeholder='Username'
                  className='appearance-none relative block w-full px-3 py-3 border border-gray-700  text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  required
                  autoComplete='username'
                  type='text'
                  name='username'
                  id='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-4 relative'>
                <label className='sr-only' htmlFor='password'>
                  Password
                </label>

                <input
                  placeholder='Password'
                  className='appearance-none block w-full px-3 py-3 border border-gray-700 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  required
                  type={showToggle ? "text" : "password"}
                  name='password'
                  id='password'
                  value={formData.password}
                  onChange={handleChange}
                />

                {showToggle ? (
                  <IoEye
                    onClick={() => setshowToggle(false)}
                    className='absolute right-3 top-3 cursor-pointer text-gray-700 z-10'
                  />
                ) : (
                  <IoEyeOff
                    onClick={() => setshowToggle(true)}
                    className='absolute right-3 top-3 cursor-pointer text-gray-700 z-10'
                  />
                )}
              </div>
            </div>
            {errorMessage ? (
              <p className='rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600'>
                {errorMessage}
              </p>
            ) : null}
            <div>
              <button
                className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300'
                disabled={isLoading}
                type='submit'>
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
        <div className='px-8 py-4 bg-white text-center '>
          <span className='text-black'>Don't have an account? </span>
          <Link
            to='/signup'
            className='font-medium text-indigo-700 hover:text-indigo-400'>
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );

};

export default Login;
