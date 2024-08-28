import style from "./style.module.css";

export default function Friend({
  user,
}: {
  user: { username: string; _id: string };
}) {
  return (
    <div class={style.row}>
      <div class={style.nameEndIndicator}>
        <div class={style.activeIndicator}></div>
        <p class={style.name + " custom-font-1"}> {user.username} </p>
      </div>
      <button class={style.chatButton + " custom-font-1"}>Chat</button>
    </div>
  );
}
