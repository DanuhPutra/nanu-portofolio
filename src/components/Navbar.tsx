import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-transparent text-white w-[70%] mx-auto">
      {/* Nama di sebelah kiri */}
      <div className="text-2xl font-bold">
        <Link to="/">DanuhPutra</Link>{" "}
        {/* Nama sebagai tautan ke halaman utama */}
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
    </nav>
  );
};

export default Navbar;
