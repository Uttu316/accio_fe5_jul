import { USERS } from "../../data/userData";
import UserCard from "../usercard";
import styles from "./userlist.module.css";

const UsersList = () => {
  return (
    <div className={styles.userlist}>
      {USERS.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
