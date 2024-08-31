import { DefaultEventsMap } from "@socket.io/component-emitter";
import { io, Socket } from "socket.io-client";
import {
  getChatInfo,
  getPosts,
  updateFriendsList,
  updateFriendSuggestions,
  updateNotifications,
} from "../api";
import { AppData, UserData } from "../../store/AppCotext";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export function initSocketConnection(
  userId: string,
  setUserData: (
    value: Partial<UserData> | ((prev: UserData) => UserData)
  ) => void,
  setAppData: (value: Partial<AppData> | ((prev: AppData) => AppData)) => void
) {
  console.log("initSocketConnection");
  socket = io("http://localhost:3000", {
    query: { userId },
  });

  socket.on("update-active-users", (data) => {
    setAppData((prev) => {
      return {
        ...prev,
        aciveUsers: data,
      };
    });
  });

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
        setUserData((prev) => {
          return {
            ...prev,
            receivedNotifications: response.receivedNotifications,
          };
        });
      }
    }
  });

  socket.on("update-friends", async (data) => {
    if (data.senderId === userId) {
      const response = await updateFriendsList(userId);
      if (response !== 500) {
        setUserData((prev) => {
          return {
            ...prev,
            friends: response.friends,
          };
        });
      }

      const friendSuggestionsResponse = await updateFriendSuggestions(userId);
      if (friendSuggestionsResponse !== 500) {
        setAppData((prev) => {
          return {
            ...prev,
            friendSuggestions: friendSuggestionsResponse.frienSuggestions,
          };
        });
      }
    }
  });

  socket.on("someone-remove-friend", async (data) => {
    if (data.friendId === userId) {
      const response = await updateFriendsList(userId);
      if (response !== 500) {
        setUserData((prev) => {
          return {
            ...prev,
            friends: response.friends,
          };
        });
      }

      const friendSuggestionsResponse = await updateFriendSuggestions(userId);
      if (friendSuggestionsResponse !== 500) {
        setAppData((prev) => {
          return {
            ...prev,
            friendSuggestions: friendSuggestionsResponse.frienSuggestions,
          };
        });
      }
    }
  });

  socket.on("update-messages", async (data) => {
    if (data.friendId === userId) {
      getChatInfo(data.userId, data.friendId).then((res) => {
        setAppData((prev) => {
          return {
            ...prev,
            chatInfo: res,
          };
        });

        const chatBox = document.getElementById("chat_box");
        if (chatBox) {
          chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth",
          });
        }
      });
    }
  });

  socket.on("update-posts", () => {
    getPosts().then((res) => {
      if (res === 500) {
        alert("Something went wrong");
      } else {
        setAppData((prev) => ({
          ...prev,
          posts: res.posts,
        }));
      }
    });
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

export function acceptFriendRequestEvent(
  senderId: string,
  recipientId: string
) {
  socket.emit("accept-friend-request", {
    senderId,
    recipientId,
  });
}

export function removeFriendEvent(userId: string, friendId: string) {
  socket.emit("remove-friend", {
    userId,
    friendId,
  });
}

export function updateMessages(userId: string, friendId: string) {
  socket.emit("update-messages", {
    userId,
    friendId,
  });
}

export function updatePosts() {
  socket.emit("update-posts");
}
