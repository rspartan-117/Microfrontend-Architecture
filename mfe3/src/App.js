import React from 'react'
import { useState } from 'react';
const App = () => {
    // State for Email App
    const [inbox, setInbox] = useState([]); // Stores sent emails
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
  
    // Send Email Function
    const sendEmail = () => {
      if (!to || !subject || !body) {
        alert("Please fill all fields.");
        return;
      }
  
      // Create a new email object
      const newEmail = { to, subject, body, time: new Date().toLocaleTimeString() };
  
      // Add to inbox (simulating sent emails)
      setInbox([...inbox, newEmail]);
  
      // Clear fields
      setTo("");
      setSubject("");
      setBody("");
    };
  
  return (
    <div>
       <div style={{ maxWidth: "600px", margin: "50px", fontFamily: "Arial" }}>
        <h2>Email App 📧</h2>

        {/* Email Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="To:"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{ padding: "8px", border: "1px solid gray" }}
          />
          <input
            type="text"
            placeholder="Subject:"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ padding: "8px", border: "1px solid gray" }}
          />
          <textarea
            placeholder="Message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ padding: "8px", border: "1px solid gray", height: "100px" }}
          />
          <button
            onClick={sendEmail}
            style={{ padding: "10px", background: "blue", color: "white", cursor: "pointer" }}
          >
            Send
          </button>
        </div>
       

        {/* Sent Emails */}
        <h3>📨 Sent Emails:</h3>
        {inbox.length === 0 ? <p>No emails sent yet.</p> : null}
        {inbox.map((email, index) => (
          <div key={index} style={{ borderBottom: "1px solid gray", padding: "10px 0" }}>
            <p>
              <strong>To:</strong> {email.to}
            </p>
            <p>
              <strong>Subject:</strong> {email.subject}
            </p>
            <p>{email.body}</p>
            <small>⏱ {email.time}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
