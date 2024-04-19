import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  return (
    <div className="w-full max-w-xs">
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <Button variant="bg-blue-500 w-full">Login</Button>
      </form>
    </div>
  );
};

export default FormRegister;
