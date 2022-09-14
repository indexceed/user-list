export interface User {
  id?: number;
  name?: string;
  username?: string;
  mail?: string;
  adress?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    }
  };
  phone?: string;
  website?: string;
  comany?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export const UserCard = (user:User) => {
  return (
      <div className="tag">
        <div className="imgContainer">
          <img src="../public/userIcon.png" alt="user" />
        </div>
        <div className="userInfo">
          <div>
            <span className="name">{user.name}</span>
          </div>
          <div className="adress">
            <span>{user.adress?.city}</span>
          </div>
          <div className="likes">
              <div className="like">
                <span>{user.website}</span>
              </div>
          </div>
        </div>
      </div>
  );
};
