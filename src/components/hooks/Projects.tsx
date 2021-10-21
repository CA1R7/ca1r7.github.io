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

export const Projects: FC = () => {
  const { projects_side } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);

  const projects: ProjectsType[] = [
    {
      alive: true,
      cover: "https://i.imgur.com/bq0mPSY.png",
      date: 2018,
      description: "A cigar client edited & multiogar servers (ffa, self-feed, mega).",
      name: "Agar-ev",
      link: "https://agar-ev.xyz",
      positionImage: "0px",
    },
    {
      date: 2021,
      alive: true,
      description: "An advanced discord generator tokens for authenticate also checker.",
      name: "destry",
      link: "https://github.com/CA1R7/destry-cli",
      positionImage: "0px",
      cover: "https://i.imgur.com/YJugRmj.png",
    },
    {
      description: "A vscode theme extension for better night time coding",
      name: "Melyon",
      date: 2020,
      cover: "https://i.imgur.com/sCdIE6G.png",
      alive: true,
      positionImage: "0px",
      link: "https://github.com/CA1R7/melyon",
    },
  ];

  return (
    <div id="projects">
      <div className="content">
        <div className="count-page">.0x1</div>
        <div className="title">projects</div>
        <div className="description">My currently project I have worked on ...</div>
        <div className="cards">
          {projects.map((card, i) => (
            <Card {...card} key={i} active={projects_side} />
          ))}
        </div>
      </div>
    </div>
  );
};
