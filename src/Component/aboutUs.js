import React, { Component } from 'react';
import aboImg from '../Images/aboImg.jpg';
import linkdln from '../Images/linkdln.png';
import myImg from '../Images/myImg.jpg';
import About from '../dataAbout';
import './About.css';

class aboutUs extends Component {
    render() {
        return (
            <div className='conatiner'>
                <div className='about-img'>
                    <img className='image-about' src={aboImg} alt='Shubham'></img>
                    <div class="card-body">
                    </div>
                </div>
            
              <div className="card-about">
                 <h6 className="card-title-about">Our Story</h6>
                   <p className="card-text">We are ServiceCave and we are newly launch in Gorakhpur. And our mission is We are provide all the services 
                       in all over the Gorakhpur like electronics services, House painting or cleaning services and we are also provide plumber carpenter Water purifier and we are also provide home tution  .</p>
                     <h2>And now, we simply can't wait to be of help to you.</h2>
                </div>
                <div class="card-team">
                    <h3 className='my-team-name'>Shubham Pandey</h3>
                    <p className='web-dev'>Web devloper</p>
                    <h1 className='title-team'>Our Team</h1> 
                    <img className='image-my' src={myImg} alt='Shubham'></img>
                    <p className='ui-ux'>UI/UX designer</p>
                    <a href="https://www.linkedin.com/in/shubham-pandey-a74193169/"> <img className='linkdln' src={linkdln} alt='Shubham'></img></a>
                </div>
                 <About />
             </div>
             
                
              
        );
    }
}

export default aboutUs;