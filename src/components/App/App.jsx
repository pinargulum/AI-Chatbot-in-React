import "../App/App.css";

import Header from "../Header/Header.jsx";
import React from "react";
import ChatMessage from "../ChatMessage/ChatMessage.jsx";
import BotAvatar from "../Header/BotAvatar.jsx";
import ChatForm from "../ChatForm/ChatForm.jsx";
//import { getBotResponse } from "../Utility/Api.js";
import { useState } from "react";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  async function generateBotResponse(history) {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };
    function checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }
    return fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({ contents: history }),
    })
      .then(checkResponse)
      .then((data) => {
        const apiResponseText = data.candidates[0].content.parts[0].text
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .trim();
        updateHistory(apiResponseText);
      })
      .catch(console.error);
  }

  return (
    <div className="container">
      <div className="chatbot-popup">
        <Header />
        <div className="chat-body">
          <div className="message bot-message">
            <BotAvatar />
            <p className="message-text">Hi there! How can I help you today?</p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage
              key={index}
              chat={chat}
            />
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
