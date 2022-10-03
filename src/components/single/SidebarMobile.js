//Router
import {
  Link,
} from 'react-router-dom'
import { AboutMeUrl, ContactUrl, ExperienceUrl, HomeUrl, WorkUrl } from '../../Constants';

function SidebarMobile({sidebarActive, setSidebarActive}) {

  const handleClick = () => setSidebarActive(false);

  return (
    <div className={sidebarActive ? "sidebar-mobile active" : "sidebar-mobile"}>
      <div className='header'>
        <h1>
            <Link className='logo' to="/" onClick={handleClick}>Devfolio</Link>
        </h1>
        <i className="bi bi-x-lg me-0" onClick={handleClick}></i>
      </div>
      <ul>
        <li>
          <Link onClick={handleClick} to={HomeUrl}>
            <i className="bi bi-house-door-fill"></i>Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to={AboutMeUrl}>
            <i className="bi bi-person-lines-fill"></i>About me
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to={ExperienceUrl}>
            <i className="bi bi-person-workspace"></i>My experience
            </Link>
        </li>
        <li>
          <Link onClick={handleClick} to={WorkUrl}>
            <i className="bi bi-code-slash"></i>My projects
            </Link>
        </li>
        <li>
          <Link onClick={handleClick} to={ContactUrl}>
            <i className="bi bi-telephone-fill"></i>Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SidebarMobile