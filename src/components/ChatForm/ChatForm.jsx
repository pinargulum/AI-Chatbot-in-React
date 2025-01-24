import("../ChatForm/ChatForm.css");
import React from "react";
import { useRef } from "react";

function ChatForm({ chatHistory, setChatHistory, generateBotResponse }) {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 2000);
  };
  return (
    <form
      action="#"
      className="chat-form"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />

      <button
        className="material-symbols-rounded"
        id="send-message"
        type="submit"
      >
        arrow_upward
      </button>
    </form>
  );
}
export default ChatForm;
