import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

import { users } from "./data/userData";
import { UserCard } from "./components/UserCard";

export const Users = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="headContainer">
          <h1> Usuarios </h1>
        </div>

        <div>
          <nav className="navContainer">
            <div className="searchContainer">
              <button className="searchButton">
                <IonIcon name="search-outline" />
              </button>
              <input
                className="searchInput"
                type="search"
                placeholder="Buscar usuarios"
              />
            </div>
          </nav>
        </div>

        <div className="tagContainer">
          {users.map((user) => {
            return (
              <div key={user.name}>
                <Link to="/user">
                  <UserCard
                    picSRC={user.picSRC}
                    name={user.name}
                    adress={user.adress}
                    likes={user.likes}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
