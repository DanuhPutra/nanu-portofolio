import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center w-[70%]">
        {/* Nama atau logo di sebelah kiri */}
        <div className="text-xl font-bold">
          YourName {/* Ganti dengan nama atau logo kamu */}
        </div>

        {/* Tautan di sebelah kanan */}
        <ul className="flex space-x-6">
          <li>
            <a href="#privacy" className="hover:text-blue-500 transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-blue-500 transition">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
