import { USERS } from "../../data/userData";
import UserCard from "../usercard";
import "./userlist.css";

const UsersList = () => {
  return (
    <div className="userlist">
      <UserCard user={USERS[0]} />
      <UserCard user={USERS[1]} />
      <UserCard user={USERS[2]} />
      <UserCard user={USERS[3]} />
      <UserCard user={USERS[4]} />
    </div>
  );
};
export default UsersList;
