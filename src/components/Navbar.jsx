import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

    const handlelogin=()=>{
        navigate('/login')
    }
    const hanndleclick=()=>{
      navigate('/')
    }
    const handleregister=()=>{
      navigate('/register')
    }
  return (
    <>
      <header className="text-gray-600 body-font" style={{"backgroundColor":"#f9f9f9"}}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span onClick={hanndleclick} className="ml-3 text-xl" style={{"cursor":"pointer"}}>HireHub</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <a className="mr-5 mx-5 hover:text-blue-800 txt">Job</a>
            <a className="mr-5 mx-5 hover:text-blue-800 txt">Company</a>
            <a className="mr-5 mx-5 hover:text-blue-800 txt">Services</a>
            {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <button onClick={handlelogin} className="transition duration-150 ease-out hover:ease-in btn text-blue-600 mx-5 inline-flex items-center bg-gray-100  py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">LogIN
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <button onClick={handleregister} className=" btn text-blue-600 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0">Register
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
