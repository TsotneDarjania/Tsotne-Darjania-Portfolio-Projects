import { batch, createEffect, createSignal } from "solid-js";
import { getChatInfo, sendMessage } from "../../../../core/api";
import { useApp } from "../../../../store/AppCotext";
import style from "./style.module.css";
import { updateMessages } from "../../../../core/socket";

function formatDate(timestamp: string): string {
  const date = new Date(timestamp);

  // Format the date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const day = date.getDate();

  // Format the time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Return the formatted date and time
  return `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(
    minutes
  )}:${padZero(seconds)}`;
}

// Helper function to pad single digit numbers with a leading zero
function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export type ChatInfoType = {
  chatId: string;
  friend: User;
  user: User;
  messages: {
    sender: { id: string; username: string };
    recipient: { id: string; username: string };
    message: string;
    createdAt: string;
  }[];
};

type User = {
  username: string;
};

export function ChatModal({ friendId }: { friendId: string }) {
  const { userData, appData, setAppData } = useApp();

  const [shiftKeyIsPressed, setShiftKeyIsPressed] = createSignal(false);

  const [message, setMessage] = createSignal(""); // Signal to track the message input

  getChatInfo(userData().userId, friendId).then((res) => {
    batch(() => {
      setAppData((prev) => ({
        ...prev,
        chatInfo: res,
      }));

      setTimeout(() => {
        const chatBox = document.querySelector(`.${style.chatBox}`);
        if (chatBox) {
          chatBox.scrollTo({
            top: chatBox.scrollHeight,
          });
        }
      }, 20);
    });
  });

  const handleSendMessage = async () => {
    const msg = message(); // Get the message from the signal
    setMessage(""); // Clear the message after sending

    if (!msg) return;

    const res = await sendMessage({
      sender: {
        id: userData().userId,
        username: userData().username,
      },
      recipient: {
        id: friendId,
        username: appData().chatInfo!.friend.username,
      },
      message: msg,
    });

    if (res === 200) {
      getChatInfo(userData().userId, friendId).then((res) => {
        updateMessages(userData().userId, friendId);
        setAppData((prev) => ({
          ...prev,
          chatInfo: res,
        }));

        const chatBox = document.querySelector(`.${style.chatBox}`);
        if (chatBox) {
          chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth",
          });
        }
        console.log("scrolling 11");
      });
    }
  };

  return (
    <div class={style.chatModal}>
      <h2 class={style.title + " custom-font-1"}>
        {appData().chatInfo?.friend.username}
      </h2>
      <div id="chat_box" class={style.chatBox}>
        {appData().chatInfo?.messages.map((msg) => {
          const myMessageClass =
            msg.sender.id === userData().userId
              ? style.myMessage
              : style.friendMessage;

          const myMessageTextClass =
            msg.sender.id === userData().userId
              ? style.myMessageText
              : style.friendMessageText;

          return (
            <div class={"custom-font-1 " + myMessageClass}>
              <p class={"custom-font-1 " + myMessageTextClass}>{msg.message}</p>
              <p class={style.timestamp + " custom-font-1"}>
                {formatDate(msg.createdAt)}
              </p>
            </div>
          );
        })}
      </div>
      <div class={style.inputBox}>
        <textarea
          value={message()} // Bind the textarea value to the signal
          onInput={(event) => setMessage(event.currentTarget.value)} // Update the signal on input
          onKeyUp={(event) => {
            if (event.key === "Shift") {
              setShiftKeyIsPressed(false);
              return;
            }
          }}
          onKeyDown={async (event) => {
            if (event.key === "Shift") {
              setShiftKeyIsPressed(true);
              return;
            }

            if (event.key === "Enter" && !shiftKeyIsPressed()) {
              event.preventDefault();
              await handleSendMessage(); // Send the message
            }
          }}
          class={style.textarea}
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
}
