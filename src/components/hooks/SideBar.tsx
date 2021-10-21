import React, { FC, CSSProperties } from "react";
import styled from "styled-components";

interface SideBarProps {
  active: boolean;
}

const SideBarComponent = styled.div<SideBarProps>`
  visibility: ${({ active }) => (active ? "unset" : "hidden")};
`;

export const SideBar: FC<SideBarProps> = ({ active }) => {
  let temp_text_style: CSSProperties = { display: "block", margin: "10px", fontSize: "15px" };
  return (
    <SideBarComponent id="side-bar" active={active}>
      <div id="logo">cairbyte71</div>
      <div id="routes-buttons">
        <span style={temp_text_style}>Comming soon ...</span>
      </div>
    </SideBarComponent>
  );
};
