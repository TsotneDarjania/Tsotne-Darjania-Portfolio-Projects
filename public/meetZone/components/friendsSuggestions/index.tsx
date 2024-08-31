import { useApp } from "../../store/AppCotext";
import Friend from "./components/friend";
import style from "./style.module.css";

export default function FriendsList() {
  const { appData } = useApp();

  return (
    <div class={style.friendsSuggestions}>
      <h1 class={style.title + " custom-font-1"}>Friends Suggestions</h1>
      {/* Suggestions */}
      <div class={style.suggestions}>
        {appData().friendSuggestions.map((friend) => {
          return <Friend id={friend._id} username={friend.username} />;
        })}
      </div>
    </div>
  );
}
