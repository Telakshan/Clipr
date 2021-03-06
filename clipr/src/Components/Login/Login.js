import React, { useState, useContext } from "react";
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../Loading/Loading";
//import DashBoard from "../DashBoard/DashBoard";
import Button from "../Button/Button";
//import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Alert from "../Alert/Alert";
import { login } from "../../Hooks/sendRequest";

import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formData;

  const submitLogin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="log-in">
      {isLoading ? <Loading /> : null}
      {/* <Alert message="Error logging in..." alertType="success" /> */}
      <MdAccountCircle className="user-icon" />
      <h2 className="title">Log in</h2>
      <form onSubmit={submitLogin}>
        <Input
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          value={password}
          label="password"
          onChange={handleChange}
          required
        />
        <div className="button">
          <Button type="submit">Log in</Button>
        </div>
      </form>
      <p>
        Need to create an account?{" "}
        <Link to="/register" className="register-link">
          Register
        </Link>
      </p>
    </div>
  );
};



export default Login;
