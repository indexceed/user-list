import { Link } from "react-router-dom"
import IonIcon from "@reacticons/ionicons"
import './userStyles.css'

export const UserDetails = () => {
  return (
    <div className="userMainContainer">

          <div className="userHeadContainer">
            <div className="userImgContainer">         
              <img className="userImg" src="../public/userIcon.png" alt="userPic" />          
            </div>
          </div>
         

          <div className="infoContainer">
            <div className="infoTitle">
                <span>Hi , My name is</span>
            </div>
            <div className="infoContent">
                <span>Darren Kuhn</span>
            </div>
          </div>

          <div className="infoSelectorContainer">
            <div >
              <button className="infoSelector">
                <IonIcon name="person" />
              </button>
            </div>
            <div >
              <button className="infoSelector">
                <IonIcon name="mail" />
              </button>
            </div>
            <div >
              <button className="infoSelector">
                <IonIcon name="calendar" />
              </button>
            </div>
            <div >
              <button className="infoSelector">
                <IonIcon name="map" />
              </button>
            </div>
            <div >
              <button className="infoSelector">
                <IonIcon name="call" />
              </button>
            </div>
            <div >
              <button className="infoSelector">
                <IonIcon name="lock-closed" />
              </button>
            </div>
            
          </div>

          <Link  to="/">
                <button className="linkButton">Volver a Usuarios</button>
          </Link>
        
    </div>
  )
}
