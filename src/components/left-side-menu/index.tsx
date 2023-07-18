import * as C from '../../assets/styles/styled'
import logoMenu from '../../assets/images/logo-menu.png'
import chat from '../../assets/images/Chat.png'
import hands from '../../assets/images/hands.png'
import { Link } from 'react-router-dom'
import dashboard from '../../assets/images/dashboard.png'
import predicoes from '../../assets/images/chart-line.png'
import produtos from '../../assets/images/products.png'



export default function SideMenu() {
  return (
    <div>
      <C.BackgroundBaseBlue>
        <img src={logoMenu} className="logoMenu" />

        <div>
          <Link to=''className='dashboard' > <img src={dashboard}/> Dashboard</Link>
          <Link to='' className='predicoes' > <img src={predicoes}/> Predições</Link>
          <Link to='' className='produtos' > <img src={produtos}/> Produtos</Link>

          <img src={hands} id="hands" />
          <img src={chat} className="chat" />
        </div>

      </C.BackgroundBaseBlue>
    </div>
  )
}
