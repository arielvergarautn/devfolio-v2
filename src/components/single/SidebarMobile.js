//Router
import {
  Link,
} from 'react-router-dom'

function SidebarMobile({sidebarActive, setSidebarActive}) {

  const handleClick = () => setSidebarActive(false);

  return (
    <div class={sidebarActive ? "sidebar-mobile active" : "sidebar-mobile"}>
      <div className='header'>
        <h1>
            <Link className='logo' to="/" onClick={handleClick}>Devfolio</Link>
        </h1>
        <i class="bi bi-x-lg me-0" onClick={handleClick}></i>
      </div>
      <ul>
        <li>
          <Link onClick={handleClick} to="/home">
            <i className="bi bi-house-door-fill"></i>Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/work">
            <i class="bi bi-code-slash"></i>My projects
            </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/contact">
            <i class="bi bi-telephone-fill"></i>Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarMobile