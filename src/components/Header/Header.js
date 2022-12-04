import './Header.css'
import TeslaLogo from '../../assets/logo/tesla-logo.svg'
import FlashIcon from '../../assets/icons/flash-icon.svg'
import AccountIcon from '../../assets/icons/account-icon.svg'
import ShopIcon from '../../assets/icons/shop-icon.svg'

export const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          src={TeslaLogo}
          alt="Tesla Logo" 
          className="logo"
        />
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <img
              src={FlashIcon}
              alt="Notifications"
              className="menu-icon"
            />
            <span className="menu-icon-number">7</span>
          </li>
          <li className="menu-item">
            <img
              src={AccountIcon}
              alt="My Account"
              className="menu-icon"
            />
          </li>
          <li className="menu-item">
            <img
              src={ShopIcon}
              alt="My cart"
              className="menu-icon"
            />
            <span className="menu-icon-number">1</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
