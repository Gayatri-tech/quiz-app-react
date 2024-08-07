import React from "react";
import "./AnimatedText.css"; // Import your custom animations

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-center items-center bg-gray-100 p-4 h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <div className="absolute top-0 left-4 text-6xl text-gray-300">“</div>
          <div className="absolute -bottom-4 right-36 md:left-44 text-6xl text-gray-300">
            ”
          </div>
          <p className="text-lg text-gray-700">
            Welcome to the quiz app! This app features quizzes on various
            technologies such as Linux, Kubernetes, DevOps, and many more. Test
            your knowledge and enhance your skills with our interactive quizzes.
          </p>
        </div>
      </div>

      <div className="border border-gray-400 p-10 m-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white animate-bounce animate-colorChange">
          QuizG
        </h1>
      </div>
    </div>
  );
};

export default About;
