import React from 'react'
import './BodyBottom.css'
import {Container,Row,Col} from 'react-bootstrap'
import bdimg1 from '../../Images/Body/Body_Bottom/bd1.png'
import bdimg2 from '../../Images/Body/Body_Bottom/bd2.png'
import bdimg3 from '../../Images/Body/Body_Bottom/bd3.png'
import Group1 from '../../Images/Body/Body_Bottom/Group1.png'
import Group2 from '../../Images/Body/Body_Bottom/Group2.png'
import Group3 from '../../Images/Body/Body_Bottom/Group3.png'

function BodyBottom() {
    return (
        <div className='bodybottom-container'>
            <div className='bodybottom-title'>
                <h2>Why you Choose us</h2>
                <p>A signature item is a particular food or drink that
                a restaurant has created and is very well known for.</p>
            </div>
            <Container className='bodybottom-items'>
                <Row xs={1} md={3}>
                    <Col className='bodybottom-item'>
                    <img className='item-image' src={bdimg1}/>
                        <div className='image-container'>
                            <img className='body-logo' src={Group1}/>
                            <h6 className='body-text'>Fast Delivery</h6>
                        </div>
                    <p className='body-paragraph'>Usually, a signature item is one of a company's or store's best items.<br/>
                        For example, a local supermarket chain has a bakery in each store.<br/></p>
                    <h6 className='body-see-more'>See More</h6>
                    </Col>
                    <Col className='bodybottom-item'>
                    <img className='item-image' src={bdimg3}/>
                        <div className='image-container'>
                            <img className='body-logo' src={Group3}/>
                            <h6 className='body-text'>Home Delivery</h6>
                        </div>
                    <p className='body-paragraph'>Usually, a signature item is one of a company's or store's best items.<br/>
                        For example, a local supermarket chain has a bakery in each store.<br/></p>
                    <h6 className='body-see-more'>See More</h6>
                    </Col>
                    <Col className='bodybottom-item'>
                    <img className='item-image' src={bdimg2}/>
                        <div className='image-container'>
                            <img className='body-logo' src={Group2}/>
                            <h6 className='body-text'>A Good Auto Responder</h6>
                        </div>
                    <p className='body-paragraph'>Usually, a signature item is one of a company's or store's best items.<br/>
                        For example, a local supermarket chain has a bakery in each store.<br/></p>
                    <h6 className='body-see-more'>See More</h6>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default BodyBottom
