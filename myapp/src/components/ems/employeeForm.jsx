import styles from "./employeeForm.module.css";

const EmployeeForm = ({ setDetails, details, onSave }) => {
  const onInput = (e) => {
    const { value, id } = e.target;
    const newDetails = { ...details, [id]: value };
    setDetails(newDetails);
  };
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="username">
          Employee name
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          placeholder="Enter name"
          onChange={onInput}
          value={details.username}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="mobile">
          Mobile
        </label>
        <input
          className={styles.input}
          type="tel"
          id="mobile"
          onChange={onInput}
          placeholder="Enter phone number"
          value={details.mobile}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder="Enter email"
          onChange={onInput}
          value={details.email}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="location">
          Location
        </label>
        <select
          value={details.location}
          className={styles.select}
          onChange={onInput}
          id="location"
        >
          <option selected disabled>
            Select Location
          </option>
          <option>Mumbai</option>
          <option>Gurgaon</option>
          <option>Noida</option>
          <option>Delhi</option>
          <option>Benglore</option>
          <option>Chennai</option>
          <option>Kolkata</option>
          <option>Hyderabad</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="feedback">
          Feedback
        </label>
        <textarea
          onChange={onInput}
          value={details.feedback}
          className={styles.textarea}
          id="feedback"
        ></textarea>
      </div>
      <button onClick={onSave} className={styles.submitBtn}>
        Save
      </button>
    </form>
  );
};
export default EmployeeForm;
