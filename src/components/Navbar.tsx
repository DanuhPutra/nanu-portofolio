import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 z-50 shadow-lg">
      <div className="flex items-center justify-between w-[70%] mx-auto">
        {/* Nama di sebelah kiri */}
        <div className="text-2xl font-bold">
          <Link to="/">DanuhPutra</Link>
        </div>

        {/* Section navbar di sebelah kanan */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-blue-500 transition">
              Education
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-blue-500 transition">
              Service
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-500 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
