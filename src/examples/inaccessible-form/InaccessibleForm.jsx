import React, { useState } from "react";

const buttonStyle = {
  backgroundColor: "#EFEFEF",
  border: "solid 1px rgb(118, 118, 118)",
  padding: "1px 6px",
  display: "inline-block",
  fontSize: 13,
  fontFamily: "Arial",
};

const InaccessibleForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <div>
      <div>
        {/* Accessibility problem: not using <label /> for form input */}
        <span>Username </span>
        <input
          data-testid="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        {/* Accessibility problem: not using <label /> for form input */}
        <span>Password </span>
        <input
          data-testid="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Accessibility problem: using a <div /> that looks like a button, instead of a <button />.
        <div /> by default is not focusable.
      */}
      <div>
        <div data-testid="signInButton" style={buttonStyle} onClick={handleSubmit}>
          Sign in
        </div>
      </div>
    </div>
  );
};

export default InaccessibleForm;
