import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null); // Referensi ke elemen teks

  useEffect(() => {
    const options = {
      strings: [
        "Student at SMK TI Global Denpasar",
        "Passionate about Frontend Development with Vite - React - Typescript - Tailwindcss",
        "Android Mobile App Developer crafting smooth and aesthetic user experiences",
        "Currently Learning React.js for scalable web apps",
        "Exploring Golang and PHP for powerful backend solutions",
        "Excited About Computer Hardware, exploring and learning the intricacies of components and systems",
        "Exploring Robotics Through Thrilling Line-Follower Robot Competitions",
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

  const educationData = [
    {
      title: "Junior High School",
      school: "SMP N12 Denpasar",
      time: "2020 - 2023",
      description: "t",
    },
    {
      title: "Senior High School",
      school: "SMK TI Bali Global Denpasar",
      time: "2024 - 2026",
      description: "t",
    },
  ];

  return (
    <div>
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
                src="/"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            My Education Journey
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-400"></div>
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`mb-12 flex ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } items-center`}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>

                <div className="ml-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <h4 className="text-lg text-white">{item.school}</h4>
                  <p className="text-gray-300">{item.time}</p>
                  <p className="mt-2 text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
