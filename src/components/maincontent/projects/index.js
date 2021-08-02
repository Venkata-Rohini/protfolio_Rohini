import React from "react";
import "./projects.scss";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../dataContent/projects";
import Separator from "../../common/separator/index";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map(project => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
