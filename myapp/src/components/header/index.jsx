import logo from "../../assets/react.svg";
import "./header.css";
const Header = () => {
  return (
    <header className="app_header">
      <div>
        <img src={logo} />
        <h1>My App</h1>
      </div>

      <nav>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};
export default Header;
