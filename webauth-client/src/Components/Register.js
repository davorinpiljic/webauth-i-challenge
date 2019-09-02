import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "../App.css";
import { createBrowserHistory } from "history";

import axios from "axios";
const history = createBrowserHistory();

export default function Register() {
  const useRegisterForm = callback => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = event => {
      if (event) {
        event.preventDefault();
      }
      callback(inputs);
      history.push("/");
    };
    const handleInputChange = event => {
      event.persist();
      setInputs(inputs => ({
        ...inputs,
        [event.target.name]: event.target.value
      }));
    };
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  };

  const registerUser = inputs => {
    axios.post("http://localhost:9000/api/auth/register", inputs);
  };
  const { inputs, handleInputChange, handleSubmit } = useRegisterForm(
    registerUser
  );

  return (
    <Container className="register">
      <h2>Register</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="username"
              onChange={handleInputChange}
              value={inputs.username}
              name="username"
              id="exampleUsername"
              placeholder="user name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              onChange={handleInputChange}
              value={inputs.password}
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
