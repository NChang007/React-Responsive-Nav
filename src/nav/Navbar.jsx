import React from 'react'
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const handleOpenNav = (e) => {
        e.preventDefault()
        document.querySelector('.navbar-navigation').classList.toggle('d-flex')
    }
    return (
        <nav className='navbar'>
            <div className='navbar-collaps'>
                <div>
                    <div className='navbar-brand'>
                        <span>Code LOTUS</span>
                    </div>
                    <div className='navigation-control'>
                        <button 
                            className='btn'
                            onClick={handleOpenNav}
                        >
                            <RxHamburgerMenu/>
                        </button>
                    </div>
                </div>=
                
                <div className='navbar-navigation'>
                    <ul className='navigation-list'>
                        <li>
                            <span>About</span>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar