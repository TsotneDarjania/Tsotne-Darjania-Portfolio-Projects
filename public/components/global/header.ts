export function Header(username: string) {
  return `
    <nav class="nav">
     <a href="#friends"> 
        <p class="username-text custom-font-1"> Friends </p>
    </a>
    <p id="username_text" class="username-text custom-font-1 selected-nav-text"> ${username} </p>
      <a href="#messages"> 
        <p class="username-text custom-font-1"> Messages </p>
    </a>
    </nav>
    `;
}
