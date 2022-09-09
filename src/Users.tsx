
import IonIcon from '@reacticons/ionicons';
import { UserCard } from './components/UserCard';

export const Users = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="headContainer">
          <h1> Usuarios </h1>
        </div>

        <div >
          <nav className="navContainer">
            <div className="searchContainer">
              
                <button className="searchButton"><IonIcon name="search-outline"/></button>
                 <input className="searchInput" type="search" placeholder="Buscar usuarios"/>
 
            </div>
          </nav>
        </div>

       <UserCard/>
      </div>
    </div>
  )
}
