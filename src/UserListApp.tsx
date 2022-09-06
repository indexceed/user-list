import { Routes, Route, Link } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { Users } from "./Users";

function UserListApp() {
  
  return <div>
      <h1>User List App</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user" element={<UserDetails />} />
      </Routes>
    </div>
}

export default UserListApp
