import React, { FC } from "react";
import styled from "styled-components";
import { ProjectsType } from "./Projects";

const ImageCover = styled.div<{ imageUrl: string; position: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: ${({ position }) => position};
  height: 100px;
  border-radius: 5px;
`;

const Button = styled.div<{ alive: boolean }>`
  cursor: ${({ alive }) => (!alive ? "not-allowed" : "pointer")};
`;

const CardCompo = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.072);
  padding: 10px;
  margin: 10px 0 10px 10px;
  width: 300px;
  border-radius: 5px;
  animation: ${({ active }) =>
    active ? "fadeInCard 1s cubic-bezier(0.47, 0, 0.745, 0.715)" : "unset"};
  @keyframes fadeInCard {
    from {
      opacity: 0;
      margin-left: 30px;
    }
    to {
      opacity: 1;
      margin-left: 10px 10px;
    }
  }
`;

export const Card: FC<ProjectsType & { active: boolean }> = ({
  cover,
  name,
  description,
  date,
  alive,
  positionImage,
  link,
  active,
}) => {
  return (
    <CardCompo active={active}>
      <div className="card">
        <ImageCover imageUrl={cover} position={positionImage} />
        <div className="label">name</div>
        <div className="answer">{name}</div>
        <div className="label">description</div>
        <div className="answer">{description}</div>
        <div className="label">created</div>
        <div className="answer">{date}</div>
        <div className="wrap">
          <div className="status">
            STATUS: <span className={alive ? "active" : ""}>{alive ? "Active" : "Died"}</span>
          </div>
          <Button id="button-visit" alive={alive} onClick={() => window.open(link)}>
            visit
          </Button>
        </div>
      </div>
    </CardCompo>
  );
};
