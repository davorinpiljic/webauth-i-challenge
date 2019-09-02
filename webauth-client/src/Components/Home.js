import React from "react";
import "../App.css";
import auth from "../auth.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import axios from "axios";

export default function Home() {
  return (
    <div className="Home">
      <br />
      <br />
      <img src={auth} />
      <br />
      <br />
    </div>
  );
}
