import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StateInterface } from "../../redux";
import MineImage from "../../public/img/mine-image.jpg";
import HeaderImageProcessor from "../../public/img/header-image.png";
import { HeaderReducer } from "../../redux/reducers/activited/header";

const CircleImage = styled.div<{ imageUrl: string; active: boolean }>`
  &::after {
    ${({ active }) => (!active ? "margin: -10px 30px !important;" : "")}
    opacity: ${({ active }) => (!active ? "0" : "1")};
    background-image: url(${({ imageUrl }) => imageUrl}) !important;
  }
`;

const TextAnimation = styled.div<{ active: boolean }>`
  animation: ${({ active }) =>
    active ? "fadeIn 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)" : "unset"};
  visibility: ${({ active }) => (active ? "unset" : "hidden")};
  @keyframes fadeIn {
    from {
      margin: -20px 0;
      opacity: 0;
    }
    to {
      margin: 0;
      opacity: 1;
    }
  }
`;

const ImageAnimation = styled.img<{ active: boolean }>`
  transform: scale(${({ active }) => (active ? "1" : "1.2")});
  opacity: ${({ active }) => (!active ? "0" : "1")};
  transition: 1s cubic-bezier(0.86, 0, 0.07, 1);
`;

export const Header: FC = () => {
  const { navbar_activated } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);
  return (
    <header>
      <div id="content">
        <div id="describe-content">
          <div className="content">
            <CircleImage id="circle-profile" imageUrl={MineImage} active={navbar_activated} />
            <div id="text-content">
              <TextAnimation id="title" active={navbar_activated}>
                WHAT ABOUT ME ?
              </TextAnimation>
              <TextAnimation id="pargph" active={navbar_activated}>
                <span>17 y/o</span>. TS/JS Developer &amp; UI/UX Designer, Mohammed Amine (
                <span>cairbyte71</span>) from Algeria still studing foreign languages (
                <span>germany</span>) also learning programing.
              </TextAnimation>
              <TextAnimation id="links" active={navbar_activated}>
                Links: <span>Facebook</span> - <span>Instgrame</span> - <span>LinkedIn</span>
              </TextAnimation>
            </div>
          </div>
        </div>
        <div id="mine-process-image">
          <ImageAnimation src={HeaderImageProcessor} alt="" active={navbar_activated} />
        </div>
      </div>
    </header>
  );
};
