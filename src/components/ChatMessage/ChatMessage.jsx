import BotAvatar from "../Header/BotAvatar.jsx";

import("./ChatMessage.css");

function ChatMessage({ chat }) {
  return (
    <div className={`message ${chat.role === "model"  ? "bot" : "user"}-message` }>
        { chat.role === "model" && <BotAvatar /> }
      <p className="message-text">{chat.text}</p>
    </div>
  );
}
export default ChatMessage;
