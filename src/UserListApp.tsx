import { Routes, Route, Link } from "react-router-dom";
import { User } from "./User";
import { Users } from "./Users";

function UserListApp() {
  
  return <div>
      <h1>User List App</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
}

export default UserListApp
