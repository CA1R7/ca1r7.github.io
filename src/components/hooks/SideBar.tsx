import React, { FC } from "react";
import styled from "styled-components";

export interface SideBarButtons {
  text: string;
  link: URL | string;
}

interface SideBarProps {
  active: boolean;
  author: string;
  sidebar_buttons: SideBarButtons[];
}

const SideBarComponent = styled.div<{ active: boolean }>`
  visibility: ${({ active }) => (active ? "unset" : "hidden")};
`;

const SideBar: FC<SideBarProps> = ({ active, sidebar_buttons, author }): JSX.Element => {
  return (
    <SideBarComponent id="side-bar" active={active}>
      <div id="logo">{author}</div>
      <div id="routes-buttons">
        {sidebar_buttons.map((link_obj, i) => (
          <div className="button" key={`link-${i}`} onClick={() => window.open(link_obj.link)}>
            {link_obj.text}
          </div>
        ))}
      </div>
    </SideBarComponent>
  );
};

export default SideBar;
