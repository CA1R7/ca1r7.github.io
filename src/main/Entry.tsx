import React, { FC, useEffect } from "react";
import { mainLauncher } from "../utils/core";

import logoImage from "../assets/img/logo.png";
import { Route, Routes } from "react-router-dom";
import { lanyardSocket } from "../utils/websocket_handler";
import { USER_ID } from "..";
import { loadImage } from "../utils/loadImage";

export const pages = [
  {
    name: "home",
    route: "/",
    component: React.lazy(() => import("../pages/Home")),
  },
];

export const AppEntry: FC = () => {
  useEffect(() => {
    (async () => {
      try {
        window.oncontextmenu = () => false;

        mainLauncher.logo = await loadImage(logoImage);

        lanyardSocket.init(USER_ID);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div id="app-entry">
      <React.Suspense fallback={<div id="loading-screen"></div>}>
        <Routes>
          {pages.map((page, i) => (
            <Route path={page.route} element={<page.component />} key={i} />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  );
};
