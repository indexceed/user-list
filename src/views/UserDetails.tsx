import { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"
import IonIcon from "@reacticons/ionicons"

import '../userStyles.css'
import { getUserData } from "../api/user.api"

export const UserDetails = () => {

    const {id} = useParams()

    const {loading, data} = getUserData(id||"") as any 

    const [title, setTitle] = useState("Hi , My name is")
    const [info, setInfo] = useState(null)

    useEffect(() => {

      if(data){
        setInfo(data.name)
        console.log(data)
      }
     
    }, [data])
    
    if(loading){
      <h1>Loading...</h1>
    }
    

  return (
    <div className="userMainContainer">

          <div className="userHeadContainer">
            <div className="userImgContainer">         
              <img className="userImg" src="/userIcon.png" alt="userPic" />          
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
              <button className="infoSelector" onClick={() => {setTitle("Hi , My name is"), setInfo(data.name)}} >
                <IonIcon name="person" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My email adress is"), setInfo(data.email)}}>
                <IonIcon name="mail" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("I work on"), setInfo(data.company?.name)}}>
                <IonIcon name="calendar" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My adress is"), setInfo(data.address?.city)}}>
                <IonIcon name="map" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My phone number is"), setInfo(data.phone)}}>
                <IonIcon name="call" />
              </button>
            </div>
            <div >
              <button className="infoSelector" onClick={() => {setTitle("My password is"), setInfo(data.username)}}>
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
