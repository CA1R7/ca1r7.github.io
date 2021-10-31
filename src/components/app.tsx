import React, { FC, useEffect, Suspense, lazy } from "react";
import { LinksType } from "./hooks/Header";
import { SideBarButtons } from "./hooks/SideBar";
import { Dispatch, StateInterface } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { HeaderReducer } from "../redux/reducers/activited/header";
import { ProjectsType } from "./hooks/Projects";
import { Footer } from "./hooks/Footer";
import { Loader } from "./hooks/Loader";

interface GeneraleData {
  author: string;
  description: JSX.Element;
  mine_image: URL | string | null;
  sideBarButtons: SideBarButtons[];
  header_links: LinksType[];
  projects: ProjectsType[];
}

const Header = lazy(() => import("./hooks/Header"));
const SideBar = lazy(() => import("./hooks/SideBar"));
const Projects = lazy(() => import("./hooks/Projects"));

export const Initialize: FC = () => {
  const { navbar_activated } = useSelector<StateInterface, HeaderReducer>(({ header }) => header);
  const dispatch = useDispatch<Dispatch<HeaderReducer>>();

  const generale_data: GeneraleData = {
    author: "cairbyte71",
    description: (
      <>
        <span>17 y/o</span>. TS/JS Developer &amp; UI/UX Designer, Mohammed Amine (
        <span>cairbyte71</span>) from Algeria still studing foreign languages (<span>Deutsch</span>)
        also learning programing.
      </>
    ),
    mine_image: null,
    sideBarButtons: [{ text: "view source", link: "https://github.com/CA1R7/ca1r7.github.io" }],
    header_links: [
      { title: "Github", link: "https://github.com/CA1R7" },
      { title: "LinkedIn", link: "https://www.linkedin.com/in/mohammed-amine-3490061a5" },
    ],
    projects: [
      {
        alive: true,
        cover: "https://i.imgur.com/bq0mPSY.png",
        date: 2021,
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
    ],
  };

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
    <Suspense fallback={<Loader author={generale_data.author} />}>
      <SideBar
        active={navbar_activated}
        author={generale_data.author}
        sidebar_buttons={generale_data.sideBarButtons}
      />
      <Header
        mine_image={generale_data.mine_image}
        description={generale_data.description}
        links={generale_data.header_links}
      />
      <Projects projects={generale_data.projects} />
      <Footer />
    </Suspense>
  );
};
