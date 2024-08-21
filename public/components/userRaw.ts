export function userRaw(username: string) {
  return `
    <div class="user-raw">
        <p class="custom-font-1 user-raw-title">${username} | </p> 
        <button class="custom-font-1 send-friend-request-button"> Send Friend Request </button>
    </div>`;
}
