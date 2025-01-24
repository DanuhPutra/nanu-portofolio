import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null); // Referensi ke elemen teks

  useEffect(() => {
    const options = {
      strings: [
        "A Web Developer",
        "A React Enthusiast",
        "A Minimalist Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Inisialisasi Typed.js
    const typed = new Typed(typedElement.current!, options);

    return () => {
      // Hapus instans Typed.js saat komponen di-unmount
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-[80%] ">
        {/* Bagian Kiri: Text */}
        <div className="text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">Ngurah Danuh Putra</span>
          </h1>
          <span
            ref={typedElement}
            className="text-lg md:text-xl text-gray-300"
          ></span>
          <p className="text-gray-400 mt-4">
            I specialize in creating clean and functional websites that help
            businesses grow.
          </p>
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="md:w-auto flex justify-center">
          <div className="relative w-40 h-40 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="https://via.placeholder.com/150" // Ganti dengan URL gambar kamu
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
