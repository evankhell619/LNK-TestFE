import React from "react";
import AuthLayouts from "../Auth/AuthLayout";
import LoginForm from "../LoginRegister/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <LoginForm />
    </AuthLayouts>
  );
};

export default LoginPage;
