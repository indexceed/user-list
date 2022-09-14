import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

import { getUserData } from "../api/user.api";
import { User, UserCard } from "../components/UserCard";


export const Users =  () => {

    const {loading, users} = getUserData()

    if(loading){
      <h1>Loading...</h1>
    }

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
          {users.map((user:User) => {
            return (
              <div key={user.id}>
                <Link to="/user">
                  <UserCard
                    name={user.name}
                    adress={user.adress}
                    website={user.website}
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
