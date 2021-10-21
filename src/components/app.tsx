import React, { FC, useEffect } from "react";
import { Header } from "./hooks/Header";
import { SideBar } from "./hooks/SideBar";
import { Dispatch, StateInterface } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { HeaderReducer } from "../redux/reducers/activited/header";
import { Projects } from "./hooks/Projects";
import { Footer } from "./hooks/Footer";

export const Initialize: FC = () => {
  const { navbar_activated } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);
  const dispatch = useDispatch<Dispatch<HeaderReducer>>();

  const handleScroll = () => {
    let pY: number = window.pageYOffset;
    let halfH: number = window.innerHeight / 2;
    let activated: boolean = pY >= halfH + 10;
    dispatch({
      type: "UPDATE_HEADER_STATE",
      payload: {
        navbar_activated: !activated,
        projects_side: activated,
      },
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navbar_activated]);
  return (
    <>
      <SideBar active={navbar_activated} />
      <Header />
      <Projects />
      <Footer />
    </>
  );
};
