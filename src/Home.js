import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Favicon from 'react-favicon';
import electric from './Images/electric.jpg';
import Paint from './Images/Paint.jpg';
import Plumb from './Images/Plumb.jpg';
import mehndiImg from './Images/mehndiImg.jpg';
import parlorImg from './Images/parlorImg.jpg';
import carpenterImg from './Images/carpenterImg.jpeg';
import sideOpen from './Images/sideOpen.png';
import crossImg from './Images/crossImg.png';
import home4 from './Images/home4.jpg';
import homeImg6 from './Images/homeImg6.jpg';
import ElectricFavImg from './Images/ElectricFavImg.png';
import PlumberFavImg from './Images/PlumberFavImg.png';
import CarpenterFavImg from './Images/CarpenterFavImg.png';
import ParlorFavImg from './Images/ParlorFavImg.png';
import MehndiFavImg from './Images/MehndiFavImg.png';
import PaintFavImg from './Images/PaintFavImg.png';
import phone from './Images/phone.png';
import About from './dataAbout';
import Input from './Input';
import { formFields } from './Data'
import home2 from './Images/home2.jpg';
import Sidebar from './Component/Sidebar';
import { Card } from 'semantic-ui-react';
import CardExampleCard from './Card'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},

            City: [
                { id: "1", City: "Select City" },
                { id: "2", City: "Gorakhpur" },
            ],

            Area: [
                { id: "1", Area: "Select Area" },
                { id: "2", Area: "Golghar" },
                { id: "3", Area: "Taramandal" },
                { id: "4", Area: "Rustampur" },
                { id: "5", Area: "Basartpur" },
                { id: "6", Area: "Mohadipur" },
                { id: "7", Area: "Gorakhnath" },
                { id: "8", Area: "TransportNagar" },
            ],
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
    }

    submitForm(e) {
        e.preventDefault(e);
        this.validateForm();
        console.log(this.state.fields)
    }

    validateForm() {
        
        let fields = this.state.fields;
        let errors = {};
        let isValid = true;

        if (!fields[formFields.City]) {
            isValid = false;
            errors[formFields.City] = alert("Please Select Your City.");
        }

        if (!fields[formFields.Area]) {
            isValid = false;
            errors[formFields.Area] = alert("Please Select Your Area.");
        }
        
        if (!fields[formFields.Phone]) {
            isValid = false;
            errors[formFields.Phone] = alert("Please enter  Phone no.");
        }
        if (typeof fields[formFields.Phone] !== "undefined") {
            if (!fields[formFields.Phone].match(/^[0-9]{10}$/)) {
                isValid = false;
                errors[formFields.Phone] = alert("Please enter valid Phone no.");
            }
        }
       
        this.setState({
            errors: errors
        });
        return isValid;
    }

  render() {
        return (
            <div className='home-conatainer'>
                <select className="sidebar-control" value={this.state.fields.area} name={formFields.Area} onChange={this.handleChange}>
                            {this.state.Area.map(item => (
                                <option>
                                  {item.Area}
                              </option>
                             ))}
                     </select>
                <select className="sidebar1-control" value={this.state.fields.city} name={formFields.City} onChange={this.handleChange}>
                           {this.state.City.map(item => (
                               <option>
                                  {item.City}
                                </option>
                             ))}
                       </select>
                <form class="form1" method="post" name="submitForm" onSubmit={this.submitForm} >
                <Input className='pass' align="center" type="Phone" name={formFields.Phone} errorMsg={this.state.errors.phone} placeholder="Phone number" value={this.state.fields.phone} onChange={this.handleChange} />
                    </form>
                <button type="button" onClick={this.submitForm} class="btn btn-danger">Book</button>
                            <h1 class="home-font">We love to maintain your</h1>
                            <h2 class="image-font">Beautiful Home</h2>
                            <h4 className='select-area'>Select Area</h4>
                            <h4 className='select-city'>Select City</h4>
                            <h4 className='select-call'>Book your Call</h4>
                            <a className='number' href="tel:7054320167">7054320167</a>
                     <img className='phone-icon' src={phone} alt='Shubham' />
                               <p class="font-home3">Home Repair Services From ServiceCave in all over the Gorakhpur</p>
                <img className='home-image' src={homeImg6} alt='Shubham' />
                  
                <div class="cards">
                    <div class="item1"> <h4 className='item-title'>Electrician</h4>
                        <img className='electric-fav' src={ElectricFavImg} alt='Shubham' />
                        <p className='font-item'>Fans, Lights, Refrigerator and more</p>
                    </div>
                    <div class="item1"> <h4 className='item-title'>Plumber</h4>
                        <img className='electric-fav' src={PlumberFavImg} alt='Shubham' />
                        <p className='font-item'>Taps, Tanks, Shower,  and more</p>
                    </div>
                    <div class="item1"> <h4 className='item-title'>Carpenter</h4>
                        <img className='electric-fav' src={CarpenterFavImg} alt='Shubham' />
                          <p className='font-item'>Doors, Windows, Furniture and more</p>
                        
                    </div>
                    <div class="item1"><h4 className='item-title'>Painter</h4>
                        <img className='electric-fav' src={PaintFavImg} alt='Shubham' />
                        <p className='font-item'>Wall Paint, Door Paint, House Paint and more</p>
                    </div>
                    <div class="item1"><h4 className='item-title'>Mehndi</h4>
                        <img className='electric-fav' src={MehndiFavImg} alt='Shubham' />
                        <p className='font-item'>One Hand, two Hand, or Bridal, and more</p>
                    </div>
                    <div class="item1"><h4 className='item-title'>Parlor</h4>
                        <img className='electric-fav' src={ParlorFavImg} alt='Shubham' />
                        <p className='font-item'>Faicial, Hair,body Message, and more</p>
                    </div>
                </div>
                    <div class="card-home">
                        <div class="card-body">
                            <h5 class="card-title1">HOW WE WORK</h5>
                        <p class="card-text1">You can book a call for AC Servicing or any other home repair service requirement right from your home. It's quite easy and here's how it works We are provide Exceptional and quality services, Our aim is we are beacome a best in the bussness
                            serviceCave Works on all the services related to the home services Electricity, Plumber, Painter,Parlor etc When you are request to our services We are Provide excellent services in a very decent rate .</p>
                        </div>
                     </div>

                <div class="card5">
                    <h3 className='home-serivice-title'> Our Services </h3>
                    <div class="service1">
                        <img className='image-service' src={electric} alt='Shubham' />
                        <h5 class="title-electric"><Link to="/Ekectrician">Electrician</Link></h5>
                    </div>
                    <div class="service1">
                        <img className='image-paint' src={Paint} alt='Shubham' />
                        <h5 class="title-paint"><Link to="/Painter">Painter</Link></h5>
                    </div>
                    <div class="service1">
                        <img className='image-plumb' src={Plumb} alt='Shubham' />
                        <h5 class="title-plumber"><Link to="/Plumber">Plumber</Link></h5>
                    </div>
                    <div class="service1">
                        <img className='image-parlor' src={parlorImg} alt='Shubham' />
                        <h5 class="title-parlor"><Link to="/Parlor">Parlor</Link></h5>
                    </div>
                    </div>
                     <About />
                </div>                     
        );
    }
}

export default Home;