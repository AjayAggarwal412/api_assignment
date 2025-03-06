import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/greet?name=${name}`
      );
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h2>Greeting App</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button
        onClick={getGreeting}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Get Greeting
      </button>
      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

export default App;
