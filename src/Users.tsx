import { Link } from "react-router-dom"
import IonIcon from '@reacticons/ionicons';

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

            <div className="linkContainer">
              <Link  to="/">
                <button className="linkButton">Reputacion</button>
              </Link>
              <Link  to="/">
                <button className="linkButton">Usiarios Nuevos</button>
              </Link>
              <Link  to="/">
                <button className="linkButton">Votantes</button>
              </Link>
              <Link  to="/">
                <button className="linkButton">Editores</button>
              </Link>
              <Link  to="/">
                <button className="linkButton">Moderadores</button>
              </Link>
            </div>

          </nav>
        </div>

        <div className="tagContainer">
          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
                <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Lelah Nicols</span>
                </div>
                <div className="adress">
                  <span>Troy, MI</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>clothes</span>
                  </div>
                  <div className="like">
                    <span>stem</span>
                  </div>
                </div>
              </div>
            </div>        
          </Link>

          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
              <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Jesus Weiss</span>
                </div>
                <div className="adress">
                  <span>Forth Worth, TX</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>headset</span>
                  </div>
                  <div className="like">
                    <span>gadget</span>
                  </div>
                  <div className="like">
                    <span>speed</span>
                  </div>
                  <div className="like">
                    <span>winter</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
              <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Annie Rice</span>
                </div>
                <div className="adress">
                  <span>Austin, TX</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>road</span>
                  </div>
                  <div className="like">
                    <span>mountain</span>
                  </div>
                  <div className="like">
                    <span>trip</span>
                  </div>
                  <div className="like">
                    <span>earth</span>
                  </div>
                  <div className="like">
                    <span>nature</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
              <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Roberth Brower</span>
                </div>
                <div className="adress">
                  <span>Cincinnati, OH</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>maintenance</span>
                  </div>
                  <div className="like">
                    <span>gears</span>
                  </div>
                  <div className="like">
                    <span>frames</span>
                  </div>
                  <div className="like">
                    <span>repair</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
              <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Amy Campbell</span>
                </div>
                <div className="adress">
                  <span>Warrior, AL</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>music</span>
                  </div>
                  <div className="like">
                    <span>disk</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/user">
            <div className="tag">
              <div className="imgContainer">
              <img src="../public/userIcon.png" alt="user" />
              </div>
              <div className="userInfo">
                <div>
                  <span className="name">Anthony S. Morin</span>
                </div>
                <div className="adress">
                  <span>Lyndhurst, NJ</span>
                </div>        
                <div className="likes">
                  <div className="like">
                    <span>vintage</span>
                  </div>
                  <div className="like">
                    <span>electric</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}
