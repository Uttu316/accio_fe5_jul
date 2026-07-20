import "./usercard.css";

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className="user_card">
      <img src={user.image} alt="user" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.city}</p>
      <p>{user.age}</p>
      {user.age > 18 && <p>Adult</p>}
      {user.age <= 18 && <p>Kid</p>}
      {user.isVerified && <p>Verfied</p>}
    </div>
  );
};
export default UserCard;
