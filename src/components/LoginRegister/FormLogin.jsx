import React, { useState } from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        value={email}
        placeholder="example@mail.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button variant="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
