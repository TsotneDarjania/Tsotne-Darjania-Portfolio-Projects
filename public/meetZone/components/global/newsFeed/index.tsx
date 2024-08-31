import { createSignal } from "solid-js";
import style from "./style.module.css";
import { getPosts, uploadPost } from "../../../core/api";
import { useApp } from "../../../store/AppCotext";
import { formatDate } from "../modal/chatModal";
import { updatePosts } from "../../../core/socket";

export function NewsFeed() {
  const [showCreatePostModal, setShowCreatePostModal] = createSignal(false);

  const { userData, appData, setAppData } = useApp();

  function submitUploadPost() {
    const title = (document.getElementById("post_title") as HTMLInputElement)
      .value;
    const content = (
      document.getElementById("post_content") as HTMLInputElement
    ).value;

    if (title.length > 0 && content.length > 0) {
      updatePosts();
      uploadPost(userData().userId, {
        username: userData().username,
        title: title,
        content: content,
      }).then((res) => {
        if (res === 200) {
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      });
    } else {
      alert("Title and content can't be empty.");
    }
  }

  getPosts().then((res) => {
    if (res === 500) {
      alert("Something went wrong");
    } else {
      setAppData((prev) => ({
        ...prev,
        posts: res.posts,
      }));
    }
  });

  return (
    <div class={style.newsFeed}>
      {/* Posts */}
      <div class={style.posts}>
        {appData().posts.map((post) => {
          return (
            <div class={style.post}>
              <p class={"custom-font-1 " + style.postAuthor}>
                {post.post.username}
              </p>
              <p class={"custom-font-1 " + style.postDate}>
                {formatDate(post.createdAt)}
              </p>
              <h3 class={"custom-font-1 " + style.postTitle}>
                "{post.post.title}"
              </h3>
              <p class={"custom-font-1 " + style.postContent}>
                {post.post.content}
              </p>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div class={style.indicators}>
        {!showCreatePostModal() && (
          <button
            onclick={() => {
              setShowCreatePostModal(true);
            }}
            class={style.createPostButton + " custom-font-1"}
          >
            Create Post
          </button>
        )}

        {showCreatePostModal() && (
          <div class={style.createPostModal}>
            {/* Close Button */}
            <img
              src="/static/img/close.png"
              alt="close"
              class={style.closeIcon}
              onclick={() => {
                setShowCreatePostModal(false);
              }}
            />

            <input
              maxLength={30}
              class={style.title + " custom-font-1"}
              placeholder="Title"
              id="post_title"
            />
            <textarea
              id="post_content"
              maxlength={1200}
              class={style.textarea + " custom-font-1"}
              placeholder="What's on your mind?"
            ></textarea>
            <button
              onclick={() => {
                submitUploadPost();
              }}
              class={style.createPostSubmitButton + " custom-font-1"}
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
function useSignal(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
