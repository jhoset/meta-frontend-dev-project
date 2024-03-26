import { Link } from "react-router-dom"
import logoIcon from "../assets/icons/logo.svg"
import menuIcon from "../assets/icons/menu.svg"


export const Nav = () => {
  return (
    <div className="nav-container">
      <a href="/" className="logo">
        <img src={logoIcon} width="160" height="50" alt="Zero Grill - Home" />
      </a>

      <a href="/" className="menu">
        <img src={menuIcon}  height="20" alt="Menu" />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item"><Link to="/" className="link">Home</Link></li>
          <li className="nav-list-item"><Link to="/" className="link">About</Link></li>
          <li className="nav-list-item"><Link to="/" className="link">Menu</Link></li>
          <li className="nav-list-item"><Link to="/" className="link">Reservations</Link></li>
          <li className="nav-list-item"><Link to="/" className="link">Order Online</Link></li>
          <li className="nav-list-item"><Link to="/" className="link">Login</Link></li>
        </ul>
      </nav>
    </div>

  )
}
