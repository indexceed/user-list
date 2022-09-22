import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

import { getUserData } from "../api/user.api";
import { Data, UserCard } from "../components/UserCard";
import '../styles.css'


export const Users =  () => {

    const {loading, data} = getUserData(undefined)

    if(loading || data === null){
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
          {data!?.map((user:Data) => {
            return (
              <div key={user.id}>
                <Link to={`/user/${user.id}`} state={user}>
                  <UserCard
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    address={user.address}
                    phone={user.phone}
                    website={user.website}
                    username={user.username}
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
