import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", { formValue })
      .then((res) => {
        if (res.data.logged_in) {
          props.handleLogin(res.data);
          localStorage.setItem("liftoffUser", JSON.stringify(res.data));
          navigate("/my-posts");
        } else {
          setformValue({
            errors: res.data.errors,
          });
        }
      })
      .catch((err) => {
        console.log("api errors:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login to Get Started</h2>
      <input
        className="form--input"
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        className="form--input"
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button color="primary" type="submit" className="primary--btn">
        Login
      </button>
    </form>
  );
}
