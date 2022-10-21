import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "../redux";
import { MainReducerState } from "../redux/reducers/main.reducer";
import { mainLauncher } from "../utils/core";

import bgHome from "../assets/img/bg-home.png";
import spotifyImage from "../assets/img/spotify.png";

export const HomePage: FC = () => {
  const { canvasScales, accountData } = useSelector<
    StateInterface,
    MainReducerState
  >((state) => ((window as any).state = state).mainReducer);

  useEffect(() => {
    mainLauncher.init();
  }, []);

  const getMiniText = (text: string) => {
    return text.length >= 16 ? text.slice(0, 16) + ".." : text;
  };

  return (
    <div id="home-page">
      <img id="bg-home" src={bgHome} alt="" />
      <div className="content">
        <div className="profile-preview">
          <div
            className="circle-avatar"
            style={{
              backgroundImage: `url(https://cdn.discordapp.com/avatars/${accountData?.discord_user.id}/${accountData?.discord_user.avatar})`,
            }}
          >
            <div className={`status ${accountData?.discord_status}`}></div>
          </div>
          <div className="text-section">
            <div className="name">
              <span>{accountData?.discord_user.username}</span>
              <span className="tag">
                #{accountData?.discord_user.discriminator}
              </span>
            </div>
            <div className="id">{accountData?.discord_user.id}</div>
          </div>
        </div>
        {accountData?.spotify ? (
          <div className="spotify-preview">
            <div className="title-bar">
              <div className="title-inside">LISENING TO SPOTIFY</div>
              <div className="img">
                <img src={spotifyImage} alt="" />
              </div>
            </div>
            <div className="album">
              <div className="album-img">
                <img src={accountData?.spotify?.album_art_url} alt="" />
              </div>
              <div className="text-section">
                {accountData?.spotify?.song ? (
                  <div className="title">
                    {getMiniText(accountData?.spotify?.song)}
                  </div>
                ) : null}
                {accountData?.spotify.artist ? (
                  <div className="artist">
                    by {getMiniText(accountData?.spotify.artist)}
                  </div>
                ) : null}
                {accountData?.spotify.album ? (
                  <div className="album-text">
                    on {getMiniText(accountData?.spotify.album)}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="links">
              <div
                className="link"
                onClick={() =>
                  window.open("https://github.com/CA1R7/ca1r7.github.io")
                }
              >
                <span>/ VIEW SOURCE</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <canvas
        className="screen animated"
        width={canvasScales.wx + "%"}
        height={canvasScales.hy + "%"}
      ></canvas>
    </div>
  );
};

export default HomePage;
