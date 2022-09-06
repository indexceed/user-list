import { Routes, Route, Link } from "react-router-dom"

export const Users = () => {
  return (
    <div>
        <h1> Users - Hola Mundo 1 </h1>
        <nav>
            <Link to="/user">Detalles de usuario</Link>
        </nav>
    </div>
  )
}
