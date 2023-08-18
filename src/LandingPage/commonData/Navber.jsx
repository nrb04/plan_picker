import { useState } from "react";
import { GiClockwork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden((prevState) => !prevState);
  };

  return (
    <nav>
      {/* navbar goes here */}
      <nav className="">
        <div className="">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <GiClockwork className="text-4xl text-blue-500"></GiClockwork>
                  <span className="font-bold pl-1"> Plan Picker</span>
                </a>
              </div>

              {/* primary nav */}
              <ul className="hidden md:flex items-center space-x-1">
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <Link to="/services">Services</Link>
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <Link to="/about">About US</Link>
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* "mobile-menu hidden md:hidden" */}
        {/* mobile menu  */}
        <div
          className={`mobile-menu md:hidden ${isMenuHidden ? "hidden" : ""}`}
        >
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Services
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
          </Link>
          <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About US
          </Link>
          <Link to="/blog" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Blog
          </Link>
          <Link
            to="/signup"
            className="py-2 px-3 block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* content goes here */}
    </nav>
  );
};
export default Navber;
