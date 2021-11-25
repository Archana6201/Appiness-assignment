import React from "react";
import EmployeeData from "../data/Post.json";
import '../Employee/Employee.css';

const EmployeeList = () => {
  return (
      <>
      {EmployeeData.map((EmployeeDetails) => {
        return (  <tr>
            <td>{EmployeeDetails.id}</td>
            <td>{EmployeeDetails.name}</td>
            <td>{EmployeeDetails.age}</td>
            <td>{EmployeeDetails.gender}</td>
            <td>{EmployeeDetails.email}</td>
            <td>{EmployeeDetails.phoneNo}</td>
    
        </tr>)
      })}
      </>
  );
};

export default EmployeeList;
