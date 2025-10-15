import React, { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "user" || password !== "password") {
      setErrorMessage("Invalid username or password");
    } else {
      setErrorMessage("");
      setSuccessMessage("Welcome, user!");
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {errorMessage !== "" ? errorMessage : null}

      {successMessage == "" ? (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ display: "inline-block" }}>
              <label>Username : </label>
              <input
                type="text"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </span>
            <span style={{ display: "inline-block" }}>
              <label>Password : </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </span>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        successMessage
      )}
    </div>
  );
}

export default App;