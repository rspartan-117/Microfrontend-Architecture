import React, { useState } from "react";

function App() {
  // State to store messages
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Handle message send
  const handleSend = () => {
    if (input.trim() === "") return; // Prevent empty messages

    setMessages([...messages, { text: input, sender: "You" }]);
    setInput(""); // Clear input after sending
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>React Chat App</h2>

      {/* Chat Window */}
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Input Field & Send Button */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

// Basic inline styles
const styles = {
  container: {
    display: "flex", 
  flexDirection: "column", // Corrected property name
  width: "300px",
  margin: "50px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  textAlign: "center",
},
  header: {
    margin: "0 0 10px",
  },
  chatWindow: {
    height: "200px",
    overflowY: "auto",
    padding: "5px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
  message: {
    textAlign: "left",
    marginBottom: "5px",
  },
  inputContainer: {
    display: "flex",
    gap: "5px",
  },
  input: {
    flex: 1,
    padding: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "3px",
  },
};

export default App;
