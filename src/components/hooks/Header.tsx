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

export interface LinksType {
  title: string;
  link: string | URL;
}

interface HeaderProps {
  mine_image?: URL | string | null;
  description: JSX.Element;
  links: LinksType[];
}

const Header: FC<HeaderProps> = ({ links, description, mine_image }): JSX.Element => {
  const { navbar_activated } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);

  return (
    <header>
      <div id="content">
        <div id="describe-content">
          <div className="content">
            <CircleImage
              id="circle-profile"
              imageUrl={mine_image || MineImage}
              active={navbar_activated}
            />
            <div id="text-content">
              <TextAnimation id="title" active={navbar_activated}>
                WHAT ABOUT ME ?
              </TextAnimation>
              <TextAnimation id="pargph" active={navbar_activated}>
                {description}
              </TextAnimation>
              <TextAnimation id="links" active={navbar_activated}>
                Links:
                {links.map((link, i) => (
                  <>
                    {i > 0 ? " - " : " "}
                    <span onClick={() => window.open(link.link)} key={i}>
                      {link.title}
                    </span>
                  </>
                ))}
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

export default Header;
