import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSale, setIssaleOpen] = useState(false);
  const [isLoan, setIsloanOpen] = useState(false);
  const [isHelp, setIshelpOpen] = useState(false);
  const [isPost, setIspostOpen] = useState(false);
  const [ishumOpen, setIshumOpen] = useState(false);

  const toggleMenu = () => {
    setIshumOpen(!ishumOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropsaledown = () => {
    setIssaleOpen(!isSale);
  };

  const toggleDroploandown = () => {
    setIsloanOpen(!isLoan);
  };

  const toggleDrophelpdown = () => {
    setIshelpOpen(!isHelp)
  };
  const toggleDroppostdown = () => {
    setIspostOpen(!isPost)
  }

  return (
    <nav className=" bg-gray-200 p-4 shadow-2xl">
      <div className="container flex  justify-between items-center">
        <div className=' flex   justify-between space-x-2 items-center '>
          <img className=' w-10 rounded-full' src="public/KamalA.jfif" alt=" Logo" />
          <div className=" text-blue-950 text-lg font-bold "> Kamal <span className=' text-amber-800'> Associates</span></div>
        </div>
        <div className=" hidden md:flex space-x-4 ">
          <div className=' flex  justify-around  items-center '>
            <img className=' w-4 rounded-full' src="pin.png" alt=" Logo" />
            <div className="text-blue-800  cursor-pointer  space-x-1">Delhi</div>
          </div>
          <Link to={'/'} className=' flex  pl-5  pt-2 '>
            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800
           focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
            me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
           dark:focus:ring-blue-800"> Home</button>
          </Link>

          <div className=' flex  justify-center  items-center '>

            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-5 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Buy
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (


             <div className="absolute right-0 z-10 mt-2  w-[50rem]   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className=' flex   justify-between items-center   '>

                <div  className=' '> 
                  
                   <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Choice </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Owner Property </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Budget Home </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Premium Home </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> New Projects  </Link>
                  </div> </div>


                <div className=' '> 
                  
                   <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular Type</Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">1 BHK </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">2 BHK </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 3 BHK </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> 4 BHK   </Link>
                  </div>
                  
                   </div>
                <div className=' '> 
                  
                   <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under  rupes 50 Lac </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Under rupes 60 Lac </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 1 Cr </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Under rupees 2 Cr  </Link>
                  </div> </div>
                <div> <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Explore </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem"> Localities in South Delhi </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in North Delhi </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in New  Delhi </Link>
                  </div>

                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">  Localities in Gurugao  </Link>
                  </div> </div>
                   
              </div>
              </div>


              )}
            </div>

          </div>
          <div className=' flex  justify-center  items-center '>

            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleDropsaledown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-5 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Resale
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isSale && (
                <div className="absolute right-0 z-10 mt-2   px-5  w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                </div>
              )}
            </div>

          </div>


          <div className=' flex  justify-center  items-center '>

            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleDroploandown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-5 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Resale
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isLoan && (
                <div className="absolute right-0 z-10 mt-2   px-5  w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className=' flex  justify-center  items-center '>

            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={toggleDrophelpdown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-5 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Help
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isHelp && (
                <div className="absolute right-0 z-10 mt-2   px-5  w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                  <div className=" flex  py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Property type</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Popular choice</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Buying Tool</Link>
                    <Link className="flex px-2 py-2 text-sm text-black hover:bg-gray-100" role="menuitem">Budget</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className=' flex  justify-center  items-center '>

            <div className="relative inline-block text-left">

              <div>
                <button
                  onClick={toggleDroppostdown}
                  className=" text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                  Post Property
                </button>
              </div>

              {isPost && (
                <div className="absolute right-0 z-10 mt-2 px-3 w-96  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Property Type</h2>
                    <p className="mt-2 text-gray-600">Select your property type from the options below:</p>
                    <ul className="">

                      <Link to={'/flat1'}>
                        <li className="bg-blue-100 hover:bg-blue-200 rounded-lg p-3 cursor-pointer mt-4 space-y-4">Flat 1</li>
                      </Link>
                      <Link to={'/flat2'}>
                        <li className="bg-blue-100 hover:bg-blue-200 rounded-lg p-3 cursor-pointer mt-4 space-y-4">Flat2 </li>
                      </Link>
                      <Link to={'/flat3'}>

                        <li className="bg-blue-100 hover:bg-blue-200 rounded-lg p-3 cursor-pointer  mt-4  space-y-4">Flat3 </li>
                      </Link>
                      <Link to={'/flat4'}>
                        <li className="bg-blue-100 hover:bg-blue-200 rounded-lg p-3 cursor-pointer mt-4 space-y-4">Flat4</li>
                      </Link>

                    </ul>
                  </div>
                </div>

              )}

            </div>
          </div>

        </div>
        <div className=' flex justify-center items-center pr-3'>
          <div className='  m-3  w-8'>
            <img src="question.png" alt="Logo" />
          </div>
          <div className=' pl-5 flex items-center justify-center'>
            <div className=' m-2 w-16'>
              <img src="suns.png" alt=" Logo" />
            </div>
          </div>
          <div className=' flex justify-center items-center '>
            <div className='    w-8 '>
              <img src=" user.png " alt=" alt" />
            </div>
            <Link to={'/signup'}>
              <div className="p-3">
                SignUp
              </div>
            </Link>
          </div>
        </div>

        <div className=' '>


          <div>
            <div className="flex  ">

              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {ishumOpen && (
              <div className="fixed inset-auto  ">
                <div className="bg-white    rounded-lg shadow-lg ">
                  <div className=" ">

                    <div>
                      <Link className="text-lg text-gray-800 hover:text-blue-500">
                        Login and Register
                      </Link>
                    </div>
                    <div>
                      <Link className="text-lg text-gray-800 hover:text-blue-500">

                      </Link>
                    </div>
                    <div>
                      <Link className="text-lg text-gray-800 hover:text-blue-500">
                        Services
                      </Link>
                    </div>
                    <div>
                      <Link className="text-lg text-gray-800 hover:text-blue-500">
                        Contact
                      </Link>
                    </div>
                  </div>
                  <button onClick={toggleMenu} className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
