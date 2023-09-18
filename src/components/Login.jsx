import React, { useState } from "react";

function Login() {
  // State variables to manage username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the provided username and password match the test account
    if (username === "test@luxpmsoft.com" && password === "test1234!") {
      // Redirect to a blank page (you can use React Router for this)
      window.location.href = "/home";
    } else {
      // Display an error message if the password is incorrect
      setErrorMessage("The provided password is wrong");
    }
  };

  // Function to handle changes in the password input field
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    // Regular expression to check if the password contains only letters, numbers, and special characters
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/|-]+$/;

    if (!passwordPattern.test(newPassword)) {
      // Display an error message for an invalid password combination
      setErrorMessage("Wrong combination");
    } else {
      // Clear the error message if the password is valid
      setErrorMessage("");
    }

    // Update the password state
    setPassword(newPassword);
  };

  return (
    <div className="d-flex-column">
      <section className="container d-flex-column">
        <img
          src={process.env.PUBLIC_URL + "/assets/cart-icon.svg"}
          alt="cart-icon"
        />
        <form id="form" method="post" onSubmit={handleLogin}>
          {/* Input field for username */}
          <div className="input-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/user-icon.svg"}
              alt="user icon"
            />
            <input
              className="input"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Input field for password */}
          <div className="input-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/lock-icon.svg"}
              alt="user icon"
            />
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
          </div>

          {/* Display error message if the password is invalid */}
          <div
            id="message"
            style={{ display: errorMessage ? "block" : "none" }}
          >
            <p id="length" className="invalid">
              {errorMessage}
            </p>
          </div>

          {/* Login button */}
          <button type="submit" className="btn">
            LogIn
          </button>

          {/* Forgot password link */}
          <p>Forgot password?</p>
        </form>
      </section>
    </div>
  );
}

export default Login;
