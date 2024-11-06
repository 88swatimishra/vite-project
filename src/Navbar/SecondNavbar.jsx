import React from 'react';
import { Link } from 'react-router-dom';
const SecondNavbar = () => {
    return (
        <div className=' '>
            <nav className="  bg-blue-900 pl-80 p-6  ">
                <div className="container flex  justify-be~tween items-center" >
                    <div className=' flex justify-between  items-center '>
                        <div className=' space-x-6 '>
                            <Link to= {'/allproperty'} >
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All Property</button>
                            </Link>

                            <Link to={'/business'} >
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Home interiors </button>
                            </Link>

                            <Link to={'/vacancy'}>
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Vacancy job </button>
                            </Link>

                            <Link to={'/loan'} >
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Loan</button>
                            </Link>

                            <Link to={'/contactus'} >
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-trasparent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Us</button>
                            </Link>

                            <div className=' pt-10 '>
                                <form className="flex items-center max-w-lg mx-auto">
                                    <div for="voice-search" className="sr-only">Search</div>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <img className=' w-5' src="Search.png" alt=" Logo" />
                                        </div>


                                        <input type="text" id="voice-search" className=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location Search.... " required />

                                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white  bg-[#818cf8] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="relative">
                <img src=" backnav.png" alt="Description" className="w-full h-auto" />
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 class=" font-semibold text-black text-3xl bg-gray-200 bg-opacity-50 p-4 rounded "> Search and Buy Real Estate in   <span className="text-blue-900">Delhi</span> </h1>
                </div>
            </div>
        </div>
    )
}
export default SecondNavbar;







