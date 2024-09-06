import { createEffect } from "solid-js";
import { useApp } from "../../../store/AppCotext";
import style from "./style.module.css";

export default function Header() {
  const { setAppData, appData, userData } = useApp();

  return (
    <nav class={style.nav}>
      <div>
        <h1
          style={{
            color: appData().isAuthenticated ? "rgb(226, 226, 226)" : "wheat",
          }}
          class={"custom-font-1 " + style.title}
        >
          MeetZone
        </h1>
        <p class={"custom-font-1 " + style.heading}>Georgian Sociall App</p>
      </div>

      <ul>
        {appData().isAuthenticated ? (
          <>
            <div class={style.userModal}>
              <p class={"custom-font-1 " + style.username}>
                {userData().username}
              </p>
              <img
                class={style.logOutIcon}
                src={"../static/img/meetZone/log-out.png"}
                alt="user"
                onclick={() => {
                  fetch("/meetzone/api/user/logout", {
                    method: "POST",
                  }).then((res) => {
                    if (res.status === 200) {
                      window.location.reload();
                    } else {
                      alert("Something went wrong");
                    }
                  });
                }}
              />
              <img
                class={style.menuIcon}
                src={"../static/img/meetZone/menu.svg"}
                alt="user"
                onclick={() => {
                  setAppData((prev) => ({
                    ...prev,
                    showSettings: true,
                  }));
                }}
              />

              <img
                class={style.notificationsIcon}
                src={"../static/img/meetZone/notification-icon.png"}
                alt="user"
                onclick={() => {
                  setAppData((prev) => ({
                    ...prev,
                    isOpenNotificationsModal: true,
                  }));
                }}
              />
              <div class={style.notificationNumber + " custom-font-1"}>
                {userData().receivedNotifications.length > 0
                  ? userData().receivedNotifications.length
                  : ""}
              </div>
            </div>
          </>
        ) : (
          <div class={style.authenticationButtons}>
            <button
              onclick={() => {
                setAppData((prev) => ({
                  ...prev,
                  isOpenAuthenticatioModal: { isOpen: true, type: "register" },
                }));
              }}
              class={style.menuButton + " custom-font-1"}
            >
              {" "}
              Registration{" "}
            </button>
            <button
              onclick={() => {
                setAppData((prev) => ({
                  ...prev,
                  isOpenAuthenticatioModal: { isOpen: true, type: "login" },
                }));
              }}
              class={style.menuButton + " custom-font-1"}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
}
