import { Link } from "react-router-dom";
import { users } from "../data/userData";

export const UserCard = () => {
  return (
      <div className="tagContainer">
      {users.map((user) => {
        return (
          <div key={user.name}>
            <Link to="/user">
              <div className="tag">
                <div className="imgContainer">
                  <img src={user.picSRC} alt="user" />
                </div>
                <div className="userInfo">
                  <div>
                    <span className="name">{user.name}</span>
                  </div>
                  <div className="adress">
                    <span>{user.adress}</span>
                  </div>
                  <div className="likes">
                    {user.likes?.map((like) => {
                        return (
                          <div className="like" key={like}>
                            <span>{like}</span>
                          </div>
                        )
                      })
                    }   
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
   </div>
  );
};
