import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-300 py-4 md:pt-8 px-2 sm:px-8 md:px-10 flex flex-col sm:flex-row justify-between">
      {/* Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/" className="text-blue-600 font-bold text-lg flex items-center md:mb-4 mt-4 sm:mb-0">
          <img src="logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleSearch} className="text-2xl mr-4">
            <FaSearch />
          </button>
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search Bar for larger devices */}
      <div className="hidden sm:flex items-center w-full sm:w-auto">
        <div className="flex border border-gray-300 rounded-full overflow-hidden w-full mb-4 sm:mb-0">
          <input 
            type="text" 
            placeholder="restaurant, hotel, service...." 
            className="px-4 py-2 w-full focus:outline-none"
          />
          {/* Separator Line */}
          <div className="w-[1px] h-6 bg-gray-400 self-center mr-4"></div>
          <input 
            type="text" 
            placeholder="Singapore..." 
            className="px-4 sm:px-8 py-2 focus:outline-none w-full"
          />
          <button className="bg-blue-600 text-white w-22 h-8 md:w-26 md:h-10 m-2 flex items-center justify-center rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-300 z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/restaurants" className="text-lg text-gray-700 hover:text-blue-600">Restaurants</Link>
            </li>
            <li>
              <Link to="/hotels" className="text-lg text-gray-700 hover:text-blue-600">Hotels</Link>
            </li>
            <li>
              <Link to="/home-services" className="text-lg text-gray-700 hover:text-blue-600">Home services</Link>
            </li>
            <li>
              <Link to="/shopping" className="text-lg text-gray-700 hover:text-blue-600">Shopping</Link>
            </li>
            <li>
              <Link to="/car-location" className="text-lg text-gray-700 hover:text-blue-600">Car location</Link>
            </li>
            <li>
              <Link to="/beauty-spa" className="text-lg text-gray-700 hover:text-blue-600">Beauty & Spa</Link>
            </li>
            <li>
              <Link to="/park" className="text-lg text-gray-700 hover:text-blue-600">Park</Link>
            </li>
            <li>
              <Link to="/museum" className="text-lg text-gray-700 hover:text-blue-600">Museum</Link>
            </li>
            <li>
              <Link to="/car-wash" className="text-lg text-gray-700 hover:text-blue-600">Car wash</Link>
            </li>
            <li>
              <Link to="/bars" className="text-lg text-gray-700 hover:text-blue-600">Bars</Link>
            </li>
            <li>
              <Link to="/gyms" className="text-lg text-gray-700 hover:text-blue-600">Gyms</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Search Bar for mobile devices */}
      {searchOpen && (
        <div className="sm:hidden flex border border-gray-300 rounded-full overflow-hidden w-full  mb-4 sm:mb-0">
          <input 
            type="text" 
            placeholder="restaurant, hotel, service...." 
            className="px-4 py-2 w-full focus:outline-none"
          />
          {/* Separator Line */}
          <div className="w-[1px] h-6 bg-gray-400 self-center mr-4"></div>
          <input 
            type="text" 
            placeholder="Singapore..." 
            className="px-4 sm:px-8 py-2 focus:outline-none w-full"
          />
          <button className="bg-blue-600 text-white w-22 h-8 md:w-16 md:h-10 m-2 flex items-center justify-center rounded-full">
            <FaSearch />
          </button>
        </div>
      )}

      {/* Business Section */}
      <div className="flex items-center justify-center w-full sm:w-auto">
        <FaGlobe className="mr-2 md:mr-6 w-10 h-10" />
      <button className="bg-black text-white px-8 py-4 flex items-center rounded-full">
         MyFeedback for business
      </button>
      </div>
    </nav>
  );
}