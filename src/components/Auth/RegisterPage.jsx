import React from "react";
import AuthLayouts from "../Auth/AuthLayout";
import FormRegister from "../LoginRegister/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
