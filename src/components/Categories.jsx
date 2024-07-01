import React from "react";

const Categories = () => {
  return (
    <div className="bg-gray-100 p-1 md:py-3">
      <ul className="flex flex-wrap justify-around gap-2">
        <button className="text-black px-2 py-1 md:px-4 border-red-800 border hover:bg-red-100 bg-red-300 text-sm md:text-lg">
          Bash
        </button>
        <button className="px-2 py-1 md:px-4 border-green-800 text-black border hover:bg-green-100 bg-green-300 text-sm md:text-lg ">
          CMS
        </button>
        <button className="text-black px-2 py-1 md:px-4 hover:bg-blue-100 bg-blue-300 text-sm md:text-lg  border-blue-800 border">
          Code
        </button>
        <button className="text-black px-2 py-1 md:px-4 bg-yellow-200 hover:bg-yellow-50 border-yellow-800 text-sm md:text-lg border">
          DevOps
        </button>
        <button className="text-black px-2 py-1 bg-violet-300 hover:bg-violet-100 text-sm md:text-lg  border-violet-800 border md:px-4">
          Docker
        </button>
        <button className="text-black px-2 py-1 md:px-4 bg-orange-300 hover:bg-orange-100 text-sm md:text-lg  border-orange-800 border">
          Linux
        </button>
        <button
          className="text-black px-2 py-1 md:px-4 bg-sky-300
        hover:bg-sky-100 text-sm md:text-lg  border-sky-800 border"
        >
          SQL
        </button>
      </ul>
    </div>
  );
};

export default Categories;
