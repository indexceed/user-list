import { Link } from "react-router-dom"
import IonIcon from "@reacticons/ionicons"
import '../userStyles.css'
import { useState } from "react"

export const UserDetails = () => {

    const [title, setTitle] = useState("Hi , My name is")
    const [info, setInfo] = useState("Darren Kuhn")

  return (
    <div className="userMainContainer">

          <div className="userHeadContainer">
            <div className="userImgContainer">         
              <img className="userImg" src="../public/userIcon.png" alt="userPic" />          
            </div>
          </div>
         

          <div className="infoContainer">
            <div className="infoTitle">
                <span>{title}</span>
            </div>
            <div className="infoContent">
                <span>{info}</span>
            </div>
          </div>

          <div className="infoSelectorContainer">
            <div >
              <button className="infoSelector" onClick={() => {setTitle("Hi , My name is"), setInfo("Darren Kuhn")}}>
                <IonIcon name="person" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My email adress is"), setInfo("darren.kuhn@example.com")}}>
                <IonIcon name="mail" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My birthday is"), setInfo("8/3/1973")}}>
                <IonIcon name="calendar" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My adress is"), setInfo("7651 Lovers Ln")}}>
                <IonIcon name="map" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My phone number is"), setInfo("(846) 725-4715")}}>
                <IonIcon name="call" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My password is"), setInfo("marino")}}>
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
