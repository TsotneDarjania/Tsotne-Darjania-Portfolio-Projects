import { useApp } from "../../../store/AppCotext";
import style from "./style.module.css";

export function Overlay() {
  const { setAppData } = useApp();

  return (
    <div
      onclick={() => {
        setAppData((prev) => ({
          ...prev,
          isOpenAuthenticatioModal: { isOpen: false, type: undefined },
          isOpenNotificationsModal: false,
        }));
      }}
      class={style.overlay}
    ></div>
  );
}
