import { Link } from 'react-router-dom';
import './../home-footer/footer.css';
import bg from './../images/footer-bg-4.jpg'

function Footer() {
    return (<>
        <div className='footer-container' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-head">
                        <h2>WEBSITES</h2>
                        <p className="empty"></p>
                    </div>
                    <ul>
                        <li>AAYUSH  POLYCLINIC</li>
                        <li>BALAJI  EYE  HOSPITAL</li>
                        <li>BALAJI  ENTERPRISES & EXPORTS</li>
                    </ul>
                </div>

                <div className="footer-center">
                    <div className="footer-head">
                        <h2>ADDRESS</h2>
                        <div className="empty"></div>
                    </div>
                    <p>BalajiEye Foundation, <br/>
                        80/2 Cutcherry Street,
                        Gobichettipalayam, <br/>
                        Erode.</p>
                </div>

                <div className="footer-right">
                    <div className="footer-head">
                        <h2>CONTACT</h2>
                        <div className="empty"></div>
                    </div>
                    <div className='contacts'>
                        <h3>EMAIL</h3>
                        <span>1drlajibacure@gmail.com</span>
                    </div>
                    <div className='contacts'>
                        <h3>PHONE</h3>
                        <p>9842515552, 9976615552
                            9688515552 <br/> (for Balaji Eye Hospital)</p>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                Copyright © 2020 Developed by Kitkat Software Technologies
            </div>
        </div>
        <div className='alter-footer'>
        <ul >
              <li> <Link to='/aayush'>AAYUSH  POLYCLINIC</Link> </li>
              <li><Link to=''></Link>BALAJI  EYE  HOSPITAL</li>
             <li><Link to=''></Link>BALAJI  ENTERPRISES & EXPORTS</li>
        </ul>
        </div>
        <div className='alter-footer-coyright'>Copyright © 2020 Developed by Kitkat Software Technologies</div>

    </>)
}

export { Footer }