import EmployeeCard from "./employeeCard";
import styles from "./employeeList.module.css";

const EmployeeList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
export default EmployeeList;
