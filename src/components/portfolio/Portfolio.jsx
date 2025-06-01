import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioFilter from "./PortfolioFilter";
import projects from "../../data/Projects.json";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  useEffect(() => {
    filter.toLowerCase() === "all"
      ? setFilteredProjects(projects)
      : setFilteredProjects(
          projects.filter(
            (project) => project.category.toLowerCase() === filter.toLowerCase()
          )
        );
  }, [filter]);
  return (
    <div className="min-h-[calc(100vh-118px)]">
      <h1 className="text-4xl pt-14 font-bold text-center uppercase dark:text-white mb-10">
        Some of my latest work
      </h1>
      <PortfolioFilter setFilter={setFilter} filter={filter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {[...filteredProjects].reverse().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
