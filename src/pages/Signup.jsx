import React from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='  flex justify-center items-center pt-10 pb-10 '>
    <div className=" bg-slate-200 p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
            <div className="mb-4">
                <div for="name" class="block text-sm font-medium text-gray-700">Name</div>
                <input type="text" id="name" name="name" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Full Name "/>
            </div>
            <div className="mb-4">
                <div for="email" class="block text-sm font-medium text-gray-700">Email</div>
                <input type="email" id="email" name="email" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Email adress"/>
            </div>
            <div className="mb-4">
                <div for="phone" class="block text-sm font-medium text-gray-700">Phone</div>
                <input type="phone" id="phone" name="phonwe" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Phone Number"/>
            </div>
            <div className="mb-4">
                <div for="password" class="block text-sm font-medium text-gray-700">Password</div>
                <input type="password" id="password" name="password" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••"/>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600"> 
            Already have an account? 
            <Link to={'/login'} className="text-blue-600 hover:underline">
                Log in
            </Link>
        </p>
    </div>
 </div>
  );
};
export default Signup;