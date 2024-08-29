import FriendsList from "../components/friendsList/Index";
import FriendsSuggestions from "../components/friendsSuggestions";
import Header from "../components/global/header";
import Loading from "../components/global/loading";
import { AuthenticationModal } from "../components/global/modal/authenticationModal";
import { NotificationsModal } from "../components/global/modal/notificationModal";
import { NewsFeed } from "../components/global/newsFeed";
import { Overlay } from "../components/global/overlay";
import Signature from "../components/signature";
import { initSocketConnection } from "../core/socket";
import { useApp } from "../store/AppCotext";
import { createEffect } from "solid-js";

export function HomePage() {
  const { appData, setAppData, userData, setUserData } = useApp();

  const randomStartAnimationDelay = () => {
    const delay = Math.floor(Math.random() * 120);
    return -delay;
  };

  createEffect(() => {
    if (appData().isAuthenticated) {
      initSocketConnection(userData().userId, setUserData, setAppData);
    }
  });

  return (
    <>
      {/* Background Image */}
      {!appData().isAuthenticated && (
        <div
          style={{
            "animation-delay": String(randomStartAnimationDelay() + "s"),
          }}
          id="bck_image"
        ></div>
      )}

      <Header />
      <Signature />

      {/* Notifications Modal */}
      {appData().isOpenNotificationsModal && <NotificationsModal />}

      {/* Loading */}
      {appData().isOpenLoading && <Loading />}

      {/* Friends List */}
      {appData().isAuthenticated && <FriendsList />}

      {/* Friends Suggestions */}
      {appData().isAuthenticated && <FriendsSuggestions />}

      {/* News Feed */}
      {appData().isAuthenticated && <NewsFeed />}

      {appData().isOpenAuthenticatioModal.type === "register" && (
        <AuthenticationModal title="Registration" />
      )}
      {appData().isOpenAuthenticatioModal.type === "login" && (
        <AuthenticationModal title="Login" />
      )}
      {appData().isOpenAuthenticatioModal.isOpen ||
        (appData().isOpenNotificationsModal && <Overlay />)}
    </>
  );
}
