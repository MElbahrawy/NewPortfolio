import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import PortfolioFilter from "./PortfolioFilter";
import projects from "../../data/Projects.json";
import Heading from "../resume/Heading";
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
      <Heading className="tracking-wide" title="Some of my latest work" />
      <PortfolioFilter setFilter={setFilter} filter={filter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {[...filteredProjects].reverse().map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <p className="text-center mb-10">
        You can find more projects on my{" "}
        <a
          href="https://github.com/MElbahrawy"
          target="_blank"
          rel="noreferrer"
          className="text-main-light border-b-2 border-main-light"
        >
          github profile
        </a>
      </p>
    </div>
  );
};

export default Portfolio;
