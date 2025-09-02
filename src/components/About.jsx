import React from "react";
import Hero_img from "../assets/Hero_img.jpeg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Hero_img}
            alt="About image"
            className="hidden md:block w-74 h-90 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-6">
              I’m a detail-oriented Front-End Developer fresher with hands-on
              project experience in React.js, Node.js, and MongoDB. I’m eager to
              learn, collaborate in fast-paced environments, and contribute to
              dynamic, innovative web solutions.
            </p>
            <p className="text-lg mb-6">
              I completed my B.E. in Computer Science and Engineering from Indra
              Ganesan College of Engineering in 2024. During my academic
              journey, I focused on mastering core programming concepts and
              applying them through practical learning.
            </p>
            <p className="text-lg mb-6">
              I completed my Higher Secondary Education (12th Grade) in 2020 at
              St Antony's Higher Secondary School, Dindigul, with a focus on
              Mathematics and Biology, securing 60%.
            </p>
            <p className="text-lg">
              I pursued my Secondary School Education (10th Grade) in 2018 at
              Government Higher Secondary School, Dindigul, and achieved 77.6%,
              laying a strong academic foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
