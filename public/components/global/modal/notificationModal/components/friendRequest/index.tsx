import { acceptFriendRequestEvent } from "../../../../../../core/socket";
import { Notification, useApp } from "../../../../../../store/AppCotext";
import style from "./style.module.css";

export default function FriendRequestRow({
  notification,
}: {
  notification: Notification;
}) {
  const { setAppData } = useApp();

  async function acceptFriendRequest() {
    return fetch("/api/friends/acceptrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: notification.sender.id,
        recipientId: notification.recipient.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        acceptFriendRequestEvent(
          notification.sender.id,
          notification.recipient.id
        );
        return 200;
      } else {
        return 500;
      }
    });
  }

  return (
    <div class={style.row}>
      <img
        src="static/img/friends-icon.png"
        class={style.icon}
        alt="friends icon"
      />
      <p class={"custom-font-1 " + style.text}>
        {notification.sender.name} sent you a friend request
      </p>
      <button
        onclick={async () => {
          const res = await acceptFriendRequest();
          if (res === 500) {
            alert("Something went wrong");
          } else {
            window.location.reload();
          }
        }}
        class={style.acceptButton}
      >
        Accept
      </button>
      <button class={style.declineButton}>Decline</button>
    </div>
  );
}
