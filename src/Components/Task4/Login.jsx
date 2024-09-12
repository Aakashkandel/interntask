import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost:9000/login', { email: email, password: password });
      localStorage.setItem('token', response.data.token);
      console.log(response);
      navigate('/welcome');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900">Before Login</h2>
            <p className="mt-4 text-lg text-gray-600">
              Please ensure the server is running before attempting to login.
            </p>
            <div className="mt-6 space-y-2 text-left">
              <h3 className="text-2xl font-bold text-gray-800">Instructions:</h3>
              <ul className="list-decimal list-inside text-xl text-gray-700 space-y-1">
                <li>Open terminal</li>
                <li>Navigate to server folder: <code className="text-indigo-600">cd /server</code></li>
                <li>Run server: <code className="text-indigo-600">nodemon start</code></li>
                <li>Please scroll down for login details.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Login Form</h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={SubmitHandler}>
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>

              <p className="text-center text-gray-600 mt-4">
                Use the following credentials to login:<br />
                <strong>Email:</strong> tester@gmail.com <br />
                <strong>Password:</strong> Tester12345
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
