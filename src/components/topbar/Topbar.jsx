import './topbar.scss';
import { Person, Mail } from '@mui/icons-material';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AJ
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 94002 47717</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>arunkjojo@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar