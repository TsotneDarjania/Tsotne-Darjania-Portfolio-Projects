import { deleteFriend } from "../../../../core/api";
import { removeFriendEvent } from "../../../../core/socket";
import { useApp } from "../../../../store/AppCotext";
import style from "./style.module.css";

export default function FriendDetailsModal({
  username,
  id,
}: {
  username: string;
  id: string;
}) {
  const { appData, setAppData, userData } = useApp();

  return (
    <div class={style.friendDetailsModal}>
      <h2 class={"custom-font-1 " + style.title}>Details</h2>
      <div class={style.row}>
        <p class={style.username + " custom-font-1"}>Name : {username}</p>
        <button
          onclick={async () => {
            setAppData((prev) => {
              return {
                ...prev,
                isOpenLoading: true,
              };
            });

            const res = await deleteFriend(userData().userId, id);

            if (res === 200) {
              removeFriendEvent(userData().userId, id);
              window.location.reload();
            } else {
              setAppData((prev) => {
                return {
                  ...prev,
                  isOpenLoading: false,
                };
              });
              alert("Something went wrong");
            }
          }}
          class={style.removeButton + " custom-font-1"}
        >
          Delete Friend
        </button>
      </div>
    </div>
  );
}
