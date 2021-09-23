import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './BodyItems.css'
import Breakfast1 from '../../Images/Body/Breakfast/breakfast1.png'
import Breakfast2 from '../../Images/Body/Breakfast/breakfast2.png'
import Breakfast3 from '../../Images/Body/Breakfast/breakfast3.png'
import Breakfast4 from '../../Images/Body/Breakfast/breakfast4.png'
import Breakfast5 from '../../Images/Body/Breakfast/breakfast5.png'
import Breakfast6 from '../../Images/Body/Breakfast/breakfast6.png'

function BodyItems() {
    return (
        <div className='body-container'>
            <Container className='body-item'>
                <Row xs={1} md={3}>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast1}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast2}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast3}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast4}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast5}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                    <Col className='card-item'>
                    <img className='card-image' src={Breakfast6}/>
                    <h6 className='card-title'>Healthy Meal Plan</h6>
                    <p>How we dream about our future</p>
                    <h2>$23.99</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default BodyItems
