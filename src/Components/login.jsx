import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const handleLoginError = (error) => {
      toast.error(error.response.data.error);
    };
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate('/announcements')
        }
      }

    } catch (error) {
      handleLoginError(error);
      console.error("Error:", error);

    }
  };

  return (
    <>
      <Header />
      <div className="login_page">

        <h2>Log in1</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="off"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="off"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login_btn">Log in</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
