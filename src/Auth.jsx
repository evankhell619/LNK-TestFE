import React from "react";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

const Auth = () => {
  const handleLogin = async (email) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async (email) => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <LoginForm handleLogin={handleLogin} />
      <h1>Logout</h1>
      <LogoutForm handleLogout={handleLogout} />
    </div>
  );
};

export default Auth;
