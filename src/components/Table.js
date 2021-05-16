import React from "react";
import { Table as Table1 } from "react-bootstrap";

export default function Table(props) {
  return (
    <div className="tableCenter">
      <Table1 striped bordered hover>
        <thead>
          <tr className="tableHead">
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((person, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.age}</td>
              <td>{person.gender}</td>
              <td>
                <button id={i} name={person} onClick={(e) => props.edit(i)}>
                  EDIT
                </button>
              </td>
              <td>
                <button id={i} name={person} onClick={(e) => props.delete(i)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table1>
    </div>
  );
}
