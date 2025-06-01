import React from "react";

const PortfolioFilter = ({ filter, setFilter }) => {
  const filters = ["All", "React", "Javascript", "HTML&CSS"];
  return (
    <div className="flex justify-center gap-4 mb-10">
      {filters.map((currentFilter) => (
        <button
          key={currentFilter}
          onClick={() => setFilter(currentFilter)}
          className={`${
            filter === currentFilter ? "bg-main" : "bg-gray-500"
          } text-white px-3 py-1 rounded-md`}
        >
          {currentFilter}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
