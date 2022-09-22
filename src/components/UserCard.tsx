export interface Data {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
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
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export const UserCard = (data:Data) => {
  return (
      <div className="tag">
        <div className="imgContainer">
          <img src="../public/userIcon.png" alt="user" />
        </div>
        <div className="userInfo">
          <div>
            <span className="name">{data.name}</span>
          </div>
          <div className="adress">
            <span>{data.address?.city}</span>
          </div>
          <div className="likes">
              <div className="like">
                <span>{data.website}</span>
              </div>
          </div>
        </div>
      </div>
  );
};
