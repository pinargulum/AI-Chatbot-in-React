
import "../Footer/Footer.css";
import { useState } from "react";
import { useRef } from "react";

function Footer() {
 
  const [chatHistory, setChatHistory] = useState([]);
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault(e);
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) {
      console.log(userMessage);
      inputRef.current.value = "";
    }

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
  };

  return (
    <>
      <div className="chat-footer">
        <form
          action="#"
          className="chat-form"
          onSubmit={handleFormSubmit}
        >
          <input
          inputRef={inputRef}
            type="text"
            placeholder="Message..."
            className="message-input"
            required
          />
          <div className="chat-controls">
            <button
              className="material-symbols-rounded"
              type="button"
            >
              sentiment_satisfied
            </button>
            <button
              className="material-symbols-rounded"
              type="button"
            >
              attach_file
            </button>
            <button
              className="material-symbols-rounded"
              id="send-message"
              type="submit"
              //onClick={handleButtonSubmit}
            >
              arrow_upward
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Footer;
