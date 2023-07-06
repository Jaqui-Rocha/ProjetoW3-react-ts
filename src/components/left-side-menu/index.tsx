import * as C from '../../assets/styles/styled'
import logoMenu from '../../assets/images/logo-menu.png'
import chat from '../../assets/images/Chat.png'
import hands from '../../assets/images/hands.png'
import { Link } from 'react-router-dom'

export default function SideMenu() {
  return (
    <div>
      <C.BackgroundBaseBlue>
        <img src={logoMenu} className="logoMenu" />
        <nav>
          <ul>
            <li>
              <Link to=" "></Link>
            </li>
            <li>
              <Link to=" "></Link>
            </li>
            <li>
              <Link to=" "></Link>
            </li>
          </ul>
        </nav>
        <div>
          <img src={hands} id="hands" />
          <img src={chat} className="chat" />
        </div>
      </C.BackgroundBaseBlue>
    </div>
  )
}
