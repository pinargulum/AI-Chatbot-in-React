import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <div className="chat-footer">
        <form
          action="#"
          className="chat-form"
        >
          <textarea
            placeholder="Message..."
            className="message-input"
          ></textarea>
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
