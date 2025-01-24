import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";

const Education = () => <div>Education Page</div>;
const Service = () => <div>Service Page</div>;
const Blog = () => <div>Blog Page</div>;
const Contact = () => <div>Contact Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="min-h-[calc(100vh-100px)]">
        {" "}
        {/* Sesuaikan tinggi konten */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
