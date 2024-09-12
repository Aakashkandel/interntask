import React from 'react'
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <div>

      <div class="flex justify-between px-20 bg-green-800 py-1 ">
        <div class="rounded">
          <img src={logo} alt="logo" class="h-10 w-10 rounded-full p-1 " />
        </div>
        <div class="flex justify-between">
          <Link to="/" class="text-xl font-semibold text-gray-200 mx-4 hover:text-yellow-500 cursor-pointer ">Home</Link>
          <Link to="/task1" class="text-xl font-semibold text-gray-200 mx-4  hover:text-yellow-500 cursor-pointer ">Task 1</Link>
          <Link to="/task2 " class="text-xl font-semibold text-gray-200 mx-4  hover:text-yellow-500 cursor-pointer ">Task 2</Link>
          <Link to="/task3" class="text-xl font-semibold text-gray-200 mx-4  hover:text-yellow-500 cursor-pointer ">Task 3</Link>
          <Link to="/task5" class="text-xl font-semibold text-gray-200 mx-4  hover:text-yellow-500 cursor-pointer ">Task 5</Link>
        </div>
        <div>
           {
            localStorage.getItem('token') ? (
              <button onClick={logoutHandler} class="text-xl font-semibold text-gray-200 mx-4   bg-yellow-600 px-4 p-1 flex rounded-xl cursor-pointer ">Logout</button>
            ) : (
              <Link to="/login" class="text-xl font-semibold text-gray-200 mx-4 bg-blue-700 px-4 p-1 flex rounded-xl cursor-pointer ">Login</Link>
            )
           }
        </div>
      </div>
    </div>
  )
}
