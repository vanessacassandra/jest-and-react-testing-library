import React from "react";

const AccessibleForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username </label>
        <input id="username" name="username" type="text" />
      </div>

      <div>
        <label htmlFor="password-field">Password </label>
        <input id="password-field" name="password" type="password" />
      </div>

      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
};

export default AccessibleForm;
