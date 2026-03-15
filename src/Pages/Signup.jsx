import React from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { Link } from 'react-router';

const Signup = () => {
  return (
    <div className="max-w-lg w-full m-auto items-center mt-28 md:mt-52">
      <div style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}} className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className='bg-indigo-700 text-white text-base font-bold justify-end inline-block px-2.5 py-1.5 rounded-2xl'>
                    <Link to="/" className=' flex text-center items-center gap-1.5'>Back To Home <TbArrowBackUp className=' text-xl font-bold'/></Link>
                </div>
        <div className="p-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-700">
            Create A New Account!
          </h2>
          <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
          <form method="POST" action="#" className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
                <div>
                <label className="sr-only" htmlFor="Name">Full Name</label>
                <input placeholder="Full Name" className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="text" id="Name" />
              </div>
              <div className="mt-4">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input placeholder="Email address" className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" required autoComplete="email" type="email" name="email" id="email" />
              </div>
              <div className="mt-4">
                <label className="sr-only" htmlFor="password">Password</label>
                <input placeholder="Password" className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" required autoComplete="current-password" type="password" name="password" id="password" />
              </div>
            </div>
            <div>
              <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 py-4 bg-white text-center ">
          <span className="text-black">Don't have an account? </span>
          <Link to="/Login" className="font-medium text-indigo-700 hover:text-indigo-400" > Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
