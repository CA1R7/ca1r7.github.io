import { store } from "../redux";
import { DiscordAccounType } from "../redux/reducers/main.reducer";

class WebSocketHandler {
  private protocol: string;
  private ws_url: string;
  public ws: WebSocket | null;
  public clientId: string | null;
  private fetch_data_loop: NodeJS.Timeout | null;
  constructor() {
    this.protocol = "wss";
    this.ws_url = "api.lanyard.rest/socket";
    this.ws = this.fetch_data_loop = this.clientId = null;
  }

  public sendPacket(op: number, data: any): void {
    this.ws?.send(
      JSON.stringify({
        op,
        d: data,
      }),
    );
  }

  public init(id: string): void {
    if (this.ws) {
      // clear
    }

    this.clientId = id;

    this.ws = new WebSocket(`${this.protocol}://${this.ws_url}`);

    this.ws.onopen = () => {
      console.log("lanyard - Connected to websocket");
    };

    this.ws.onmessage = (e) => {
      try {
        let data: {
          op: number;
          d?: { heartbeat_interval?: number };
          t?: string;
        } = JSON.parse(e.data);

        switch (data.op) {
          case 0x0:
            if (data?.d && "t" in data && data.t === "INIT_STATE") {
              store.dispatch({
                type: "UPDATE_MAIN_STATE",
                payload: {
                  accountData: data.d as DiscordAccounType,
                },
              });
            }

            break;
          case 0x1:
            if (this.fetch_data_loop) {
              clearInterval(this.fetch_data_loop);
            }

            this.sendPacket(0x2, { subscribe_to_id: this.clientId });

            this.fetch_data_loop = setInterval(() => {
              if (this.clientId) {
                this.sendPacket(0x2, { subscribe_to_id: this.clientId });
              }
            }, data.d?.heartbeat_interval);
            break;
        }
      } catch (e) {
        console.log(e);
      }
    };

    this.ws.onclose = (error: CloseEvent) => {
      console.log(
        `lanyard - Connection closed: ${error.reason} [${error.code}]`,
      );
      setTimeout(() => {
        this.init(this.clientId!);
      }, 1000);
    };
  }
}

export const lanyardSocket = new WebSocketHandler();
