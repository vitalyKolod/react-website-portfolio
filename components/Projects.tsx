import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div data-aos="fade-up" className="text-center">
        <p className="heading_mini">Recent Works</p>
        <h1 className="heading_primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <ProjectCard
        data-aos="fade-right"
        title="Graduation project website"
        tech1="HTML"
        tech2="CSS"
        tech3="JavaScript"
        tech4=""
        image="/images/prj3.png"
      />
      <ProjectCard
        title=" My portfolio website"
        tech1="React"
        tech2="Next"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/prj3.png"
      />{" "}
      <ProjectCard
        title="Portfolio website for photographer"
        tech1="React"
        tech2="Next"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/prj3.png"
      />
      <ProjectCard
        title="Church Website"
        tech1="HTML"
        tech2="CSS"
        tech3="JavaScript"
        tech4="JavaScript"
        image="/images/prj3.png"
      />
    </div>
  );
};

export default Projects;
