import { createSignal, createContext, useContext, JSX } from "solid-js";
import { CustomWindow } from "../config/types";

// Define the type for your app data
export type AppData = {
  isOpenAuthenticatioModal: {
    isOpen: boolean;
    type: "login" | "register" | undefined;
  };
  friendSuggestions: { _id: string; username: string }[];
  isAuthenticated: boolean;
  isOpenLoading: boolean;
  isOpenNotificationsModal: boolean;
};

export type UserData = {
  username: string;
  userId: string;
  sendedNotifications: Notification[];
  receivedNotifications: Notification[];
  friends: Friend[];
};

export type Friend = {
  id: string;
  username: string;
};

export type Notification = {
  _id: string;
  sender: {
    id: string;
    name: string;
  };
  recipient: {
    id: string;
    name: string;
  };
  type: "friend_request";
  status: "pending" | "accepted" | "rejected";
};

// Define the type for the context value
type AppContextType = {
  appData: () => AppData; // Signals return functions, so we use () => AppData
  setAppData: (value: Partial<AppData> | ((prev: AppData) => AppData)) => void;
  userData: () => {
    username: string;
    userId: string;
    sendedNotifications: Notification[];
    receivedNotifications: Notification[];
    friends: Friend[];
  };
  setUserData: (
    value: Partial<UserData> | ((prev: UserData) => UserData)
  ) => void;
};

const AppContext = createContext<AppContextType>();

export function AppProvider(props: { children: JSX.Element }) {
  const customWindow = window as unknown as CustomWindow;

  const [appData, setAppData] = createSignal<AppData>({
    isOpenAuthenticatioModal: {
      isOpen: false,
      type: undefined,
    },
    friendSuggestions: customWindow.appData.friendSuggestions,
    isAuthenticated:
      customWindow.appData.authenticated === "true" ? true : false,
    isOpenLoading: false,
    isOpenNotificationsModal: false,
  });

  const [userData, setUserData] = createSignal({
    username:
      customWindow.appData.authenticated === "true"
        ? customWindow.userData.username
        : "",
    userId: customWindow.userData.userId,
    sendedNotifications: customWindow.userData.sendedNotifications,
    receivedNotifications: customWindow.userData.receivedNotifications,
    friends: [],
  });

  return (
    <AppContext.Provider value={{ appData, setAppData, userData, setUserData }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a CounterProvider");
  }
  return context;
}
