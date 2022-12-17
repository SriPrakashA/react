import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../header/header.css'
import logo from './../images/home-logo.png'

function Header() {
    const[toggle,settoggle]=useState(false);
    return(<>
        <div className="home-header">
            <img src={logo} />
            <ul className={toggle?'home-navbar active':'home-navbar'}>
                <li> <Link to='/aayush' className='home-header-links'>AAYUSH POLYCLINIC</Link> </li>
                <li><Link to='/' className='home-header-links'>BALALI EYE HOSPITAL</Link></li>
                <li><Link to='/' className='home-header-links'>BALAJI ENTERPRISES & EXPORTS</Link></li>
            </ul>  
            <button className='nav-toggle' onClick={()=>{settoggle(!toggle)}}>{toggle?'X':<i class="fa-solid fa-bars"></i>}</button>  
        </div>
    </>)
}

export{Header}