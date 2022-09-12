export interface User {
  picSRC: string,
  name: string,
  adress: string,
  likes:string[],
}
export const UserCard = (user:User) => {
  return (
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
            {user.likes.map((like) => {
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
  );
};
