import React from "react";
import errorIcon from "../assets/error.svg";

const ErrorPage = () => {
  return (
    <div className="w-1/2 m-auto flex flex-col items-center gap-2 mt-[7rem] md:mt-[10rem]">
      <img src={errorIcon} alt="error-icon" />
      <p className="text-center">Oops! Something went wrong</p>
    </div>
  );
};

export default ErrorPage;
