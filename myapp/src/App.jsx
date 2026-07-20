import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import UsersList from "./components/userList";

function App() {
  return (
    <div className="app_container">
      <Header />
      <UsersList />
      <Footer />
    </div>
  );
}

export default App;
