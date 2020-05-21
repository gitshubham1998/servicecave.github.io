import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import electric from './Images/electric.jpg';
import Paint from './Images/Paint.jpg';
import Plumb from './Images/Plumb.jpg';
import mehndiImg from './Images/mehndiImg.jpg';
import parlorImg from './Images/parlorImg.jpg';
import carpenterImg from './Images/carpenterImg.jpeg';


const CardExampleCard = () => (
    <div className='conatiner-card'>
        <div className='item1'>
        <Card>
                <img className='image1' src={electric} alt='Shubham'></img>
            <Card.Content>
                <Card.Header>Electrician</Card.Header>
                <Card.Meta>
                   <p class="card-text">We are provide a best services at your home require to the electric fieldcb.</p>
                </Card.Meta>
            </Card.Content>

        </Card>
        </div>
        <div className='item1'>
        <Card >
                <img className='image1' src={Paint} alt='Shubham'></img>
            <Card.Content>
                <Card.Header>Painter</Card.Header>
                <Card.Meta>
                        <p class="card-text">We are provide a best services at your home require to the Painting field.</p>
                </Card.Meta>
            </Card.Content>

        </Card>
        </div>
        <div className='item1'>
            <Card >
                <img className='image1' src={Plumb} alt='Shubham'></img>
                <Card.Content>
                    <Card.Header>Plumber</Card.Header>
                    <Card.Meta>
                        <p class="card-text">We are provide a best services at your home require to the Plumbing field.</p>
                    </Card.Meta>
                </Card.Content>

            </Card>
            </div>
            
            <div className='container-row'>
           
        <div className='item1'>
            
            <Card  className='break'>
                    <img className='image1' src={mehndiImg} alt='Shubham'></img>
                <Card.Content>
                    <Card.Header>Mehndi</Card.Header>
                    <Card.Meta>
                            <p class="card-text">We are provide a best services at your home require to the Mehndi field.</p>
                    </Card.Meta>
                    <Card.Description>Please Select the Component from the Menu to see the demo.</Card.Description>
                </Card.Content>

            </Card>
            </div>
        <div className='item1'>
            <Card >
                    <img className='image1' src={parlorImg} alt='Shubham'></img>
                <Card.Content>
                    <Card.Header>Parlor</Card.Header>
                    <Card.Meta>
                        <p class="card-text">We are provide a best services at your home require to the Parlor field.</p>
                    </Card.Meta>
                    <Card.Description>Please Select the Component from the Menu to see the demo.</Card.Description>
                </Card.Content>

            </Card>
            </div>
        <div className='item1'>
            <Card >
                 <img className='image1' src={carpenterImg} alt='Shubham'></img>
                <Card.Content>
                    <Card.Header>Carpenter</Card.Header>
                    <Card.Meta>
                            <p class="card-text">We are provide a best services at your home require to the Plumbing field.</p>
                    </Card.Meta>
                    <Card.Description>Please Select the Component from the Menu to see the demo.</Card.Description>
                </Card.Content>

            </Card>
        </div>
        </div>

    </div>

)

export default CardExampleCard
