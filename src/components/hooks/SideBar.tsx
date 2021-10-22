import React, { FC, CSSProperties } from "react";
import styled from "styled-components";

interface SideBarProps {
  active: boolean;
}

const SideBarComponent = styled.div<SideBarProps>`
  visibility: ${({ active }) => (active ? "unset" : "hidden")};
`;

export const SideBar: FC<SideBarProps> = ({ active }) => {
  return (
    <SideBarComponent id="side-bar" active={active}>
      <div id="logo">cairbyte71</div>
      <div id="routes-buttons">
        <div
          className="button"
          onClick={() => window.open("https://github.com/CA1R7/ca1r7.github.io")}
        >
          view source
        </div>
      </div>
    </SideBarComponent>
  );
};
