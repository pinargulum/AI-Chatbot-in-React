import BotAvatar from "./BotAvatar.jsx";
import "./Header.css";

function Header() {
  return (
    
     <div className="chat-header">
    <div className="header-info">
      <BotAvatar />
      <h2 className="logo-text">Chatbot</h2>
      <button
        id="close-chatbot"
        className="material-symbols-rounded"
      >
        keyboard_arrow_down
      </button>
    </div>
    </div>
   
  );
}
export default Header;
