import { Notification, useApp } from "../../store/AppCotext";

export function updateNotifications(userId: string) {
  return fetch("/api/friends/updaterecivednotification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export function updateFriendsList(userId: string) {
  return fetch("/api/friends/friendList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export async function updateFriendSuggestions(userId: string) {
  return fetch("/api/friends/updatefriendsuggestions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export async function deleteFriend(userId: string, friendId: string) {
  return fetch("/api/friends/deletefriend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      friendId,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function getChatInfo(userId: string, friendId: string) {
  return fetch("/api/chat/getchatinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      friendId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export function sendMessage(messageData: {
  sender: {
    id: string;
    username: string;
  };
  recipient: {
    id: string;
    username: string;
  };
  message: string;
}) {
  return fetch("/api/chat/sendmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageData,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function uploadPost(
  userId: string,
  post: {
    username: string;
    title: string;
    content: string;
  }
) {
  return fetch("/api/post/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      post: post,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function getPosts() {
  return fetch("/api/post/getposts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}
