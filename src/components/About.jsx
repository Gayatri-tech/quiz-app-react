import React from "react";
import "./AnimatedText.css"; // Import your custom animations

const About = () => {
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-center h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <div className="absolute -top-2 left-4 text-6xl text-gray-300">“</div>
          <div className="absolute -bottom-4 right-4 text-6xl text-gray-300">
            ”
          </div>
          <p className="md:text-lg text-gray-700">
            Welcome to the quiz app! This app features quizzes on various
            technologies such as Linux, Kubernetes, DevOps, and many more. Test
            your knowledge and enhance your skills with our interactive quizzes.
          </p>
        </div>
      </div>

      <h1 className=" hidden md:block text-6xl font-bold text-white animate-bounce animate-colorChange">
        QuizG
      </h1>
    </div>
  );
};

export default About;