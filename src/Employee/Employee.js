import React from "react";
import EmployeeList from "./EmployeeList";

function Employee() {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>phoneNo.</th>
        </tr>
        <EmployeeList />
      </table>
    </div>
  );
}

export default Employee;
