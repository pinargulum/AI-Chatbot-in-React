import "../App/App.css";
import BotMessage from "../BotMessage/BotMessage.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  
  return (
    <>
      <div className="chatbot-popup">
        <Header />
        <BotMessage />
        <Footer />
      </div>
    </>
  );
}

export default App;
