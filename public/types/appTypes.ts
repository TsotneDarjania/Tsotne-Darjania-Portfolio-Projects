export interface CustomWindow extends Window {
  userData: {
    username: string;
    sendedNotifications: Notification[];
  };
}
