import { createSignal, onMount } from "solid-js";
import { useApp } from "../../store/AppCotext";
import style from "./style.module.css";
import Friend from "./components/friend";

export default function FriendsList() {
  const { userData, setUserData } = useApp();

  onMount(async () => {
    const friendsList = await getFriendsList();
    setUserData({
      ...userData(),
      friends: friendsList,
    });
  });

  async function getFriendsList() {
    const response = await fetch("/api/friends/friendList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userData().userId,
      }),
    });
    const data = await response.json();
    return data.friends;
  }

  return (
    <div class={style.friendsList}>
      <h1 class={`${style.title} custom-font-1`}>Friends List</h1>
      <div class={style.friends}>
        {userData().friends.length > 0 ? (
          userData().friends.map((friend) => <Friend user={friend} />)
        ) : (
          <p>No friends found.</p>
        )}
      </div>
    </div>
  );
}
