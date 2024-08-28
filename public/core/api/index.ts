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
