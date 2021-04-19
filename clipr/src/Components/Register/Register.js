import React, { useContext, useState, useEffect } from "react";
import Button from "../Button/Button";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Input from "../Input/Input";
//import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";

import "./Register.scss";
import { ValuesOfCorrectTypeRule } from "graphql";
import Alert from "../Alert/Alert";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { username, email, password } = formData;

  const auth = useContext(AuthContext);

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
      setIsLoading(false);
    },
    variables: {
      username: username,
      email: email,
      password: password,
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setIsLoading(true);
    addUser();
  };

  const errorTimeOut = () => {
    setTimeout(() => {
      setError(!error);
    }, 2000);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up">
      {error ?  <Alert message="Register failed" alertType="error" /> : null}
      {isLoading ? <Loading /> : null}
      <MdAccountCircle className="user-icon" />
      <h2 className="title">Sign up</h2>
      <form onSubmit={onSubmit}>
        <Input
          name="username"
          type="text"
          value={username}
          label="username"
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
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

        <Button type="submit">Register</Button>
      </form>
      <p>
        Already have an account?
        <Link to="/login" className="login-link">
          {" "}
          Log in
        </Link>
      </p>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      registerInput: { username: $username, email: $email, password: $password }
    ) {
      id
      email
      username
      token
    }
  }
`;

export default Register;
