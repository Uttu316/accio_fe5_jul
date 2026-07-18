import logo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app_container">
      <header className="app_header">
        <img src={logo} />
        <h1>My App</h1>
      </header>
      <div className="app_content">
        <h2>Welcome to React with Vite</h2>

        <p>Enjoy fast development with Vite and React.</p>

        <p>Happy coding!</p>
      </div>
      <div className="app_getting_started">
        <h3>Get Started</h3>

        <ul>
          <li>
            Modify the code in <code>src/App.jsx</code>
          </li>
          <li>Save your changes to see live updates</li>
          <li>Explore Vite's features for faster builds</li>
        </ul>
        <p>Have a great day! 🚀</p>
      </div>
    </div>
  );
}

export default App;
