import { batch, createSignal } from "solid-js";
import { useApp } from "../../../store/AppCotext";
import style from "./style.module.css";

export default function Friend({
  id,
  username,
}: {
  id: string;
  username: string;
}) {
  const { userData, setAppData } = useApp();

  const [isAlreadySent, setIsAlreadySent] = createSignal(false);

  userData().sendNotifications.forEach((notification) => {
    if (notification.recipient === id) {
      setIsAlreadySent(true);
    }
  });

  function cancelFriendRequest() {
    return fetch("/api/friends/canselrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender: userData().userId, recipient: id }),
    }).then((res) => {
      if (res.status === 200) {
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
      body: JSON.stringify({ sender: userData().userId, recipient: id }),
    }).then((res) => {
      if (res.status === 200) {
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
