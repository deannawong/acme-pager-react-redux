import React from "react";
import connect from "./connect.js";
import { deleteContact } from "./storeUpdates.js";
import store from "./store.js";

const EmployeeTable = connect(({ employees, location: { hash } }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={`${employee.id}`}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default EmployeeTable;
