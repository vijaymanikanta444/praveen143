import React, { Component } from "react";
import "../App.css";

class Form extends Component {
  state = {
    data: { firstname: "", lastname: "", age: "", gender: "" },
    errors: {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
    },
    users: [],
  };

  firstname = (e) => {
    this.setState({
      data: { ...this.state.data, firstname: e.target.value },
      errors: {
        ...this.state.errors,
        firstname: this.state.data.firstname == null || "" ? true : false,
      },
    });
  };
  lastname = (e) => {
    this.setState({
      data: { ...this.state.data, lastname: e.target.value },
      errors: {
        ...this.state.errors,
        lastname: this.state.data.lastname == null || "" ? true : false,
      },
    });
  };
  age = (e) => {
    this.setState({
      data: { ...this.state.data, age: e.target.value },
      errors: {
        ...this.state.errors,
        age: this.state.data.age == null || "" ? true : false,
      },
    });
  };
  gender = (e) => {
    this.setState({
      data: { ...this.state.data, gender: e.target.value },
      errors: {
        ...this.state.errors,
        gender: this.state.data.gender == null || "" ? true : false,
      },
    });
  };
  validate = () => {
    this.setState({
      errors: {
        firstname: this.state.data.firstname == "",
        lastname: this.state.data.lastname == "",
        age: this.state.data.age == "",
        gender: this.state.data.gender == "",
      },
    });
  };
  submit = (e) => {
    e.preventDefault();

    if (!this.validate()) return;

    this.setState({
      users: [...this.state.users, this.state.data],
      data: { firstname: "", lastname: "", age: "", gender: "" },
    });

    console.log(this.state.data);
  };

  render() {
    return (
      <div className="body">
        <form className="center">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="float">First Name :</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Enter First Name"
                value={this.state.data.firstname}
                onChange={this.firstname}
              />
              <div className="error">
                {this.state.errors.firstname ? "Name is required" : ""}
              </div>
            </div>

            <div className="form-group col-md-6">
              <label className="float">Last Name :</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Enter Last Name"
                value={this.state.data.lastname}
                onChange={this.lastname}
              />
              <div className="error">
                {this.state.errors.lastname ? "Name is required " : ""}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="float">Age :</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter Age"
                value={this.state.data.age}
                onChange={this.age}
              />
              <div className="error">
                {this.state.errors.age ? "Age is required" : ""}
              </div>{" "}
            </div>

            <div className="form-group col-md-6">
              <div>
                <fieldset className="form-group">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Gender:
                    </legend>
                    <div className="col-sm-10">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Male"
                          id="Male"
                          value="Male"
                          onClick={this.gender}
                          checked={this.state.data.gender === "Male"}
                        />
                        <label>Male</label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Female"
                          id="Female"
                          value="Female"
                          onClick={this.gender}
                          checked={this.state.data.gender === "Female"}
                        />
                        <label>Female</label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="error">
                  {this.state.errors.gender ? "please select gender" : ""}
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="register" onClick={this.submit}>
              Submit
            </button>
          </div>
        </form>
        <div className="table">
          <form>
            <table align="center">
              <tr>
                <th className="firstname">Firstname</th>
                <th className="lastname">Lastname</th>
                <th className="age">Age</th>
                <th className="gender">Gender</th>
              </tr>
              {this.state.users.map((person) => (
                <tr>
                  <td>{person.firstname}</td>
                  <td>{person.lastname}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                </tr>
              ))}
              <tr>{}</tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
