import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Restraurant Repository</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="restaurants">Restaurants</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="last_five_dishes_submitted">Last Five Dishes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default NavBar