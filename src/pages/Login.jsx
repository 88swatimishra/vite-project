import React from 'react'
// import { Link } from 'react-router-dom';
const Login = () => {
  return (
          <div className='  flex justify-center items-center pt-10 pb-10 '>
          <div className=" bg-slate-200 p-8 rounded-lg shadow-lg w-full max-w-md ">
          <h2 className="text-2xl font-bold mb-6 text-center"> Login </h2>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="********" 
                        required />
                    <p class="text-red-500 text-xs italic hidden">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                        Login
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                @ Kamal Associates.All rights reserved.
            </p>
        </div> 
        </div>
      )
}
export default Login;  