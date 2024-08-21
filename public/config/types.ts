import { DomElements } from "./dom";

export interface CustomWindow extends Window {
  userData: {
    authenticated: string;
    username: string;
  };
}

export type appData = {
  dom: DomElements;
  authenticated: boolean;
  username: string;
};
