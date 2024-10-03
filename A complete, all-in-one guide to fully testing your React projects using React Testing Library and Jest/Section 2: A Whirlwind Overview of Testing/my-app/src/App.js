import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="App">
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
