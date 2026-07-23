import styles from "./employeeCard.module.css";

const EmployeeCard = ({ employee }) => {
  const { username, email, phone, feedback, location } = employee;
  return (
    <div className={styles.card}>
      <p className={styles.info}>{username}</p>
      <p className={styles.info}>{email}</p>
      <p className={styles.info}>{phone}</p>
      <p className={styles.info}>{feedback}</p>
      <p className={styles.info}>{location}</p>
      <div className={styles.actions}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};
export default EmployeeCard;
