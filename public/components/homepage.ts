import { appData } from "../config/types";
import { Form } from "./authenticationForm";
import { Header } from "./global/header";
import Overlay from "./overlay";
import { userRaw } from "./userRaw";

export function HomePage(data: appData) {
  const logOutContent = `
  <h1 class="main-title custom-font-1">GEORGIAN SOCIAL WEBSITE</h1>
 <button id="open_authentication_button" class="open-authentication-button custom-font-1"> Authorization </button>
 ${Form()}
 `;

  const logInContent = `
  <div id="log_in_content">
    ${Header(data.username)}
    <img src="img/log-out-icon.png" id="log_out_button" class="log-out-button"></img>
    <div class="content-section">
       <div class="main-content-section"> 
        <img class="main-content-image" alt="notification icon" src="img/notification-icon.png"> </img>
        <p class="custom-font-1 main-p"> Notifications : 0 </p>
       </div>

       <div class="users-list"> 
        <p class="users-list-title custom-font-1"> Latest Registered Users </p>
        ${userRaw("Tsotne")}
        ${userRaw("Tsotne")}
        ${userRaw("Tsotne")}
        ${userRaw("Tsotne")}
        ${userRaw("Tsotne")}
       </div>
    </div>
    
    <div id="friends" class="content-section light-bck">

      
    </div>
    <div id="messages" class="content-section">

      
    </div>
  </div>
 `;

  return `
    <div class="homepage">
      ${Overlay()}
      ${data.authenticated ? logInContent : logOutContent}
    </div>
    `;
}
