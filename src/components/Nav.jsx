import logoIcon from "../assets/icons/logo.svg"


export const Nav = () => {
  return (
    <div className="nav-container">
      <a href="" className="logo">
        <img src={logoIcon} width="160" height="50" alt="Zero Grill - Home" />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item"> <a className="link" href=""> Home </a> </li>
          <li className="nav-list-item"> <a className="link" href=""> About </a> </li>
          <li className="nav-list-item"> <a className="link" href=""> Menu </a> </li>
          <li className="nav-list-item"> <a className="link" href=""> Reservations </a> </li>
          <li className="nav-list-item"> <a className="link" href=""> Order Online </a> </li>
          <li className="nav-list-item"> <a className="link" href=""> Login </a> </li>
        </ul>
      </nav>
    </div>

  )
}
