import { Action } from "..";

export interface DiscordAccounType {
  spotify: {
    track_id: string;
    timestamps: { start: number; end: number };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  };
  listening_to_spotify: true;
  discord_user: {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    bot: boolean;
    avatar: string;
  };
  discord_status: "dnd" | "idle" | "online" | "offline";
}

export interface MainReducerState {
  accountData: DiscordAccounType | null;
  canvasScales: { wx: number; hy: number };
}

export const mainReducer = (
  state: MainReducerState = {
    accountData: null,
    canvasScales: { wx: window.innerWidth, hy: window.innerHeight },
  },
  action: Action<MainReducerState>,
): MainReducerState => {
  switch (action.type) {
    case "UPDATE_MAIN_STATE":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
