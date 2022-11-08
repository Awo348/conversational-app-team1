import React, { useState } from "react";

export default function Login(props) {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className="register">
      <section className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <span>Welcome Back</span>

        <form id="form" className="flex flex-col">
          <input
            value={username}
            type="username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            value={pass}
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>
      </section>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}
