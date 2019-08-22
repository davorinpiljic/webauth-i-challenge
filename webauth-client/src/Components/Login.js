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

import axios from "axios";

export default function Login() {
  const [credentials, setCreds] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:9000/auth/login").then(res => {
      setCreds(res.data);
    });
  });

  return (
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="username"
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
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
