import React, { Component } from 'react';
import favHome from './Images/favHome.png';
import favDel from './Images/favDel.png';
import gorakhpurImg from './Images/gorakhpurImg.png';
import './Component/About.css';
import { Link } from 'react-router-dom';





class About extends Component {
    render() {
        return (
            <div>
                <div className="card-choose">
                    <div className="card-body">
                        <h1 className='about-why'>Why Choose Us</h1>
                        <div className="prov-item">
                            <div className="prov-item">
                                <h1 className='font-Deliver'>Deliver</h1>
                                <h3 className='font-Deliver1'>Our Best Services</h3>
                                <img className='fav-Del' src={favDel} alt='Shubham'></img>
                            </div>
                            <div class="prov-item-right">
                                <h1 className='font-home'>300+</h1>
                                <h3 className='font-satisfied'>Satisfied homes</h3>
                            </div>
                            <img className='fav-home' src={favHome} alt='Shubham'></img>
                            <div className="prov-item">

                                <div class="prov-item-img"></div>
                                <div className="prov-item-right">
                                    <h1 className="prov-item-in">230+</h1>
                                    <h3 className="prov-item-house">In-house Professionals</h3>
                                </div>
                                <img className='fav-home1' src={favHome} alt='Shubham'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-us'>
                    <div className="card">
                        <iframe className='map-img' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.6180599185!2d83.33387124346507!3d26.76369793739585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1587880090507!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <div className="card-body">
                            <h1 className='font-Info'>Info</h1>
                            <ul className='font-About'>
                                <li><Link to="/Home">Home</Link></li>
                                <li><Link to="/Form/Login">Login</Link></li>
                                <li><Link to="/aboutUs">About</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                            </ul>

                            <h1 className='service-title'>Services</h1>
                            <ul className='font-services'>
                                <li><Link to="/Home">Plumber</Link></li>
                                <li><Link to="/Form/Login">Carpenter</Link></li>
                                <li><Link to="/aboutUs">Painter</Link></li>
                                <li><Link to="/Contact">Parlor</Link></li>
                                <li><Link to="/Services">Mehndi</Link></li>
                            </ul>
                            <h1 className='city-title'>City</h1>
                            <ul className='font-city'>
                                <li>Gorakhpur</li>
                                </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;