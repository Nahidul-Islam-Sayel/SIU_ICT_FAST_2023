import React from 'react';
import cse from '../Image/CSE SOCITY.jpg';
import './Footer.css';
const Footer = () => {
    return (
        <footer class="footer">
            <div class="policy clearfix">
                <ul>
                    <div className='flex justify-center'>
                        <li class=""><img src={cse} alt="" className='img-size' /></li>
                    </div>
                    <li> CSE Socaity </li>
                    <li>Sylhet Interntation University</li>
                    <li>Phone: 017****</li>
                    <li>email: siucse@gmail.com</li>
                </ul>
            </div>
            <div class="foot">
                <hr />
                <span class="copy">
                    Copyright@ 2023 SIU ICT FAST|Powered By <span className="Footer1">DEPARTMENT OF CSE SIU</span>|Developed By <span className='Footer2'>Nahidul Islam Sayel</span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;