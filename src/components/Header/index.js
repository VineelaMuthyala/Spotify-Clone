import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link-style">
      <div className="back-button-container">
        <FaArrowLeft className="arrow-icon" />
        <p className="back-text">Back</p>
      </div>
    </Link>
  </div>
)

export default Header
