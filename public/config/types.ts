import { SendNotification } from "../store/AppCotext";
import { DomElements } from "./dom";

export interface CustomWindow extends Window {
  userData: {
    username: string;
    userId: string;
    sendNotifications: SendNotification[];
  };

  appData: {
    authenticated: string;
    friendSuggestions: Friend[];
  };
}

export type Friend = {
  _id: string;
  username: string;
};

export type appData = {
  dom: DomElements;
  authenticated: boolean;
  username: string;
};
