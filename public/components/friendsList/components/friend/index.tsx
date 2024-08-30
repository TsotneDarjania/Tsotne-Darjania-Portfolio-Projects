import { useApp } from "../../../../store/AppCotext";
import style from "./style.module.css";

export default function Friend({
  user,
}: {
  user: { username: string; id: string };
}) {
  const { appData, setAppData } = useApp();

  return (
    <div class={style.row}>
      <div class={style.nameEndIndicator}>
        {appData().aciveUsers?.includes(user.id) ? (
          <div class={style.activeIndicator}></div>
        ) : (
          <div class={style.deactiveIndicator}></div>
        )}
        <p
          onclick={() => {
            setAppData((prev) => {
              return {
                ...prev,
                friendDetailsModalState: {
                  isOpen: true,
                  username: user.username,
                  userId: user.id,
                },
              };
            });
          }}
          class={style.name + " custom-font-1"}
        >
          {" "}
          {user.username}{" "}
        </p>
      </div>
      <button
        onclick={() => {
          setAppData((prev) => {
            return {
              ...prev,
              chatModalState: {
                isOpen: true,
                friendId: user.id,
              },
            };
          });
        }}
        class={style.chatButton + " custom-font-1"}
      >
        Chat
      </button>
    </div>
  );
}
