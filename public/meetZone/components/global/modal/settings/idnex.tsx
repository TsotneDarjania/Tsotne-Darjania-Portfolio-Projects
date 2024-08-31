import { deleteAccount } from "../../../../core/api";
import { useApp } from "../../../../store/AppCotext";
import style from "./style.module.css";

export default function Settings() {
  const { userData } = useApp();
  return (
    <div class={style.settingsModal}>
      <h2 class={style.title}>Settings</h2>
      <button
        onclick={() => {
          deleteAccount(userData().userId).then((res) => {
            if (res === 200) {
              window.location.reload();
            } else {
              alert("Something went wrong");
            }
          });
        }}
        class={style.deteleAccountButton + " custom-font-1"}
      >
        Delete Accound
      </button>
    </div>
  );
}
