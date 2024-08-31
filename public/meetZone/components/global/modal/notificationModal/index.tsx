import { useApp } from "../../../../store/AppCotext";
import FriendRequestRow from "./components/friendRequest";
import style from "./style.module.css";

export function NotificationsModal() {
  const { userData } = useApp();

  return (
    <div class={style.menuModal}>
      <h2 class={"custom-font-1 " + style.title}>Notifications</h2>

      <div class={style.content}>
        {userData().receivedNotifications.length === 0 ? (
          <p class={"custom-font-1 " + style.noneNotificationText}>
            You don't have any notifications
          </p>
        ) : (
          userData().receivedNotifications.map((notification) => (
            <FriendRequestRow notification={notification} />
          ))
        )}
      </div>
    </div>
  );
}
