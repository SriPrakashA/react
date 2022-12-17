import './../aayush footer/aayushfooter.css'
import logo from './../images/home-logo.png'


function Aayushfooter() {
    return (<>
        <div className="footer-top">
            <div className="footer-left">
                <h2>ADDRESS</h2>
                <div className="footer-address">
                    <p>DR Lajiba Aayush Polyclinic, <br />
                        80/2 Cutcherry Street,Sathy Main Road, <br />
                        Gobichettipalayam, <br />
                        Erode.</p>
                     <div><i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-linkedin"></i></div>   
                </div>
            </div>
            <div className="footer-left">
                <h2>TIMINGS</h2>
                <div className="footer-address">
                    <p>Mon-Sat 9.30AM - 8PM<br /><br />
                    Sun - 10AM - 1PM </p>
                    <p>Make appointment ?</p>
                     
                </div>
            </div>
            <div className="footer-left">
                <h2>LOCATION & CONTACT</h2>
                <div className="footer-address">
                    <p>EMAIL:<br />
                    <span>1drlajibacure@gmail.com</span> </p>
                     <p>PHONE <br /> <span>+91 9842515552 <br /> +91 9976615552 </span></p>   
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <h2>Copyright © 2020 Developed by Kitkat Software Technologies</h2>
            <img src={logo} />
        </div>
    </>)
}

export{Aayushfooter}