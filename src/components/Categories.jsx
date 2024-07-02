import React from "react";

const Categories = ({ onSelectCategory }) => {
  const categories = [
    { name: "Bash", bgColor: "bg-red-300", borderColor: "border-red-800" },

    { name: "CMS", bgColor: "bg-green-300", borderColor: "border-green-800" },

    { name: "Code", bgColor: "bg-blue-300", borderColor: "border-blue-800" },

    {
      name: "DevOps",
      bgColor: "bg-gray-300",
      borderColor: "border-gray-800",
    },
    {
      name: "Docker",
      bgColor: "bg-violet-300",
      borderColor: "border-violet-800",
    },
    {
      name: "Linux",
      bgColor: "bg-orange-300",
      borderColor: "border-orange-800",
    },

    { name: "SQL", bgColor: "bg-sky-300", borderColor: "border-sky-800" },
  ];

  return (
    <div className="bg-gray-100 p-2 md:py-3">
      <ul className="flex flex-wrap justify-around gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`text-black px-2 py-1 md:px-4 border ${category.borderColor} ${category.bgColor} text-sm md:text-lg hover:text-white`}
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
