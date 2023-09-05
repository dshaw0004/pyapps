import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import "./header.css"
import logo from "../static/pyapps_192.jpeg" 

export default function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener("resize", ()=>{setWindowWidth(window.innerWidth)})
    const navStyles= {
        open: {
            transform: 'scaleX(1)',
            
        },
        close: {
            transform: 'scaleX(0)',
        },
        empty: {
            transfrom : 'unset'
        }
    }
    const [navStatus, setNavStatus] = useState(false);
    function toggleNav(){
        setNavStatus(!navStatus)
    }
    return (
        <header className='primary-header'>
            <div className="branding">
                <div className="logo-container">
                    <img 
                        src={logo}
                        alt="logo here" 
                        className="logo"
                        />
                </div>
                    <p>PyApps</p>
                </div>
                <div className="ham-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="ham-icon" onClick={toggleNav}>
                        <path 
                            d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"
                        >
                        </path>
                    </svg>
                    <nav className="primary-nav" style={windowWidth <= 600 ? navStatus ? navStyles.open : navStyles.close : navStyles.empty}>
                        <div className='close-nav-btn-container'>
                        <i className="nav-close-btn" onClick={toggleNav} >&gt;&gt;</i>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                            <NavLink className="" to="/store">Store</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}