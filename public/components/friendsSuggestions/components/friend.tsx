import { batch, createSignal } from "solid-js";
import { useApp } from "../../../store/AppCotext";
import style from "./style.module.css";
import {
  canselFriendRequestEvent,
  makeFriendSuggestionEvent,
} from "../../../core/socket";

export default function Friend({
  id,
  username,
}: {
  id: string;
  username: string;
}) {
  const { userData, setAppData } = useApp();

  const [isAlreadySent, setIsAlreadySent] = createSignal(false);

  userData().sendedNotifications.forEach((notification) => {
    if (notification.recipient.id === id) {
      setIsAlreadySent(true);
    }
  });

  function cancelFriendRequest() {
    return fetch("/api/friends/canselrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: userData().userId,
        recipientId: id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        canselFriendRequestEvent(userData().userId, id);
        return 200;
      } else {
        return 500;
      }
    });
  }

  async function sendFriendRequest() {
    return fetch("/api/friends/sendrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: userData().userId,
        senderName: userData().username,
        recipientId: id,
        recipientName: username,
      }),
    }).then((res) => {
      if (res.status === 200) {
        makeFriendSuggestionEvent(userData().userId, id);
        return 200;
      } else {
        return 500;
      }
    });
  }

  return (
    <div class={style.raw}>
      <p class={style.name + " custom-font-1"}> {username}</p>
      <button
        onclick={async () => {
          const status_code = isAlreadySent()
            ? await cancelFriendRequest()
            : await sendFriendRequest();

          if (status_code === 200) {
            batch(() => {
              setIsAlreadySent(!isAlreadySent());
            });
          } else {
            alert("Something went wrong");
          }
        }}
        class={style.button}
      >
        {isAlreadySent() ? "Cancel" : "Add Friend"}
      </button>
    </div>
  );
}
