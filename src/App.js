import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
// import TableForm from "./components/TableForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        {/* <TableForm /> */}
      </div>
    );
  }
}
