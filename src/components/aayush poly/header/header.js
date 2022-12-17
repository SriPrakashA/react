import './../header/header.css'
import { Link } from 'react-router-dom'
import logo from './../images/home-logo.png'

function Aayushheader() {
    
    return(<>
        <div className="header">
            <div className='aayush-logo'>
            <Link to='/'><img src={logo} alt='logo'/></Link> 
            </div>
             
            <ul className='unorder'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Make Appointment</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </>)
}

export{Aayushheader}