import { Routes, Route } from "react-router-dom";
import { UserDetails } from "../views/UserDetails";
import { Users } from "../views/Users";

function UserListApp() {
  
  return <div>
      <h1 className="centerText">User List App</h1>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user" element={<UserDetails />} />
      </Routes>
    </div>
}

export default UserListApp
