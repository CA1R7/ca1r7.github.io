import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "../../redux";
import { HeaderReducer } from "../../redux/reducers/activited/header";
import { Card } from "./Card";

export interface ProjectsType {
  cover: string;
  name: string;
  description: string;
  date: number;
  alive: boolean;
  positionImage: string;
  link: string;
}

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects: FC<ProjectsProps> = ({ projects }): JSX.Element => {
  const { projects_side } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);

  return (
    <div id="projects">
      <div className="content">
        <div className="count-page">.0x1</div>
        <div className="title">projects</div>
        <div className="description">My projects I have worked on ...</div>
        <div className="cards">
          {projects.map((card, i) => (
            <Card {...card} key={i} active={projects_side} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
