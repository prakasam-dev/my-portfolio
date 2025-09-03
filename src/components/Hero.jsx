import React from "react";
import Hero_img from "../assets/Hero_img.jpeg";

const Hero = () => {
  const downloadResume = () => {
    const filePath = "/my-portfolio/Gnana_prakasam.BE.Cse.pdf";

    // Try to trigger download
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Gnana_prakasam.BE.Cse.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: open in new tab (especially for mobile)
    setTimeout(() => {
      window.open(filePath, "_blank");
    }, 500);
  };

  return (
    <div className="bg-black text-white text-center pt-20 sm:pt-24 md:pt-28 pb-16">
      <img
        src={Hero_img}
        alt="hero image"
        className="mx-auto mb-5 w-64 h-64  rounded-full object-cover transform 
        transition-all duration-300 hover:scale-105 "
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Gnana prakasam
        </span>
        , Front-end Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a href="#contact">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact With Me
          </button>
        </a>
        <button
          onClick={downloadResume}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
