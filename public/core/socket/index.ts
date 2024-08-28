import { DefaultEventsMap } from "@socket.io/component-emitter";
import { io, Socket } from "socket.io-client";
import { updateNotifications } from "../api";
import { UserData } from "../../store/AppCotext";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export function initSocketConnection(
  userId: string,
  setUserData: (
    value: Partial<UserData> | ((prev: UserData) => UserData)
  ) => void
) {
  socket = io("http://localhost:3000", {
    query: { userId },
  });

  socket.on("connect", () => {});

  socket.on("disconnect", () => {});

  socket.on("get-friend-suggestion", async (data) => {
    if (data.recipientId === userId) {
      const response = await updateNotifications(userId);
      if (response !== 500) {
        console.log("Received notifications", response);
        setUserData((prev) => {
          return {
            ...prev,
            receivedNotifications: response.receivedNotifications,
          };
        });
      }
    }
  });

  socket.on("cancel-friend-request", async (data) => {
    if (data.recipientId === userId) {
      const response = await updateNotifications(userId);
      if (response !== 500) {
        console.log("Received notifications", response);
        setUserData((prev) => {
          return {
            ...prev,
            receivedNotifications: response.receivedNotifications,
          };
        });
      }
    }
  });
}

export function makeFriendSuggestionEvent(
  senderId: string,
  recipientId: string
) {
  socket.emit("make-friend-suggestion", {
    senderId,
    recipientId,
  });
}

export function canselFriendRequestEvent(
  senderId: string,
  recipientId: string
) {
  socket.emit("cancel-friend-request", {
    senderId,
    recipientId,
  });
}
