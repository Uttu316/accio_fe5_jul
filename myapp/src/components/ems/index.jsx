import { useState } from "react";
import EmployeeForm from "./employeeForm";
import EmployeeList from "./employeeList";
import styles from "./ems.module.css";

const EmployeeManagementSystem = () => {
  const [details, setDetails] = useState({
    username: "",
    mobile: "",
    email: "",
    location: "",
    feedback: "",
  });
  const [list, setList] = useState([]);

  const onSave = (e) => {
    e.preventDefault(); //stop the page refresh
    const employee = { ...details };
    employee.id = parseInt(Math.random() * 10000000);
    setList((curr) => [...curr, employee]);
    setDetails({
      username: "",
      mobile: "",
      email: "",
      location: "",
      feedback: "",
    }); //reset the form
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Employee Directory</h2>
      <EmployeeForm setDetails={setDetails} details={details} onSave={onSave} />
      <EmployeeList list={list} />
    </div>
  );
};
export default EmployeeManagementSystem;
