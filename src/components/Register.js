import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

export class Register extends Component {
  state = {
    users: [
      {
        firstname: "praveen",
        lastname: "surisetty",
        age: "23",
        gender: "male",
      },
      {
        firstname: "naidu",
        lastname: "bandaru",
        age: "25",
        gender: "male",
      },
      {
        firstname: "sravani",
        lastname: "jampa",
        age: "23",
        gender: "female",
      },
    ],
    data: { firstname: "", lastname: "", age: "", gender: "" },
    currentUser: "",

    currentId: -1,
  };

  updateUsers = (person) => {
    this.setState({ users: [...this.state.users, person] });
  };

  edit = (id) => {
    console.log(this.state.users[id], id);
    this.setState({
      currentId: this.state.users[id],
      data: this.state.users[id],
    });
    console.log(this.state.data);
  };
  delete = (id) => {
    console.log(this.state.users[id], id);
    this.setState({ currentUser: this.state.users[id] });
  };

  // onSubmit = (e) => {
  //   e.preventDefault();

  //   if (this.validate()) return;
  //   if (this.state.currentId == -1) {
  //     this.setState({
  //       users: [...this.state.users, this.state.data],
  //       data: { firstname: "", lastname: "", age: "", gender: "" },
  //     });
  //   } else {
  //     let newlist = this.state.users.map((person, i) =>
  //       i == this.state.currentId ? this.state.data : person
  //     );
  //     this.setState({ users: newlist });
  //   }

  //   this.props.updateUsers(this.state.data);
  //   this.setState({
  //     data: { firstname: "", lastname: "", age: "", gender: "" },
  //   });
  // };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Form
          updateUsers={this.updateUsers}
          currentUser={this.state.currentUser}
          onSubmit={this.onSubmit}
          edit={this.edit}
          data={this.state.data}
          currentId={this.state.currentId}

          // onSubmit={this.onSubmit}
        />
        <Table users={this.state.users} edit={this.edit} delete={this.delete} />
      </div>
    );
  }
}

export default Register;
