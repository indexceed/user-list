import { Link } from "react-router-dom"

export const UserDetails = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="headContainer">
          <h1> Detalles de usuario </h1>
          <Link  to="/">
                <button className="linkButton">Volver a Usuarios</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
