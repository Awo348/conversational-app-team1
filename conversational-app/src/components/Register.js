import React, { useState } from "react";

export default function Register(props) {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfrim] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="register">
      <section className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <span>Register for best experience</span>
        <form id="form" className="flex flex-col">
          <input
            value={name}
            type="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={username}
            type="username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="Email adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={pass}
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            value={passwordConfirm}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfrim(e.target.value)}
          />

          <button className="submit">Register</button>
        </form>
      </section>
      <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
}
