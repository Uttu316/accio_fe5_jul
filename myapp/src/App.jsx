import "./App.css";
import Counter from "./components/counter";
import EmployeeManagementSystem from "./components/ems";
import Footer from "./components/footer";
import Header from "./components/header";
import UsersList from "./components/userList";

function App() {
  return (
    <div className="app_container">
      <Header />
      <UsersList />
      <Counter />
      <EmployeeManagementSystem />
      <Footer />
    </div>
  );
}

export default App;
