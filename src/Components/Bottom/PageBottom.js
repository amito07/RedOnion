import React from 'react'
import BottomLogo from '../../Images/Bottom/logo.png'
import './PageBottom.css'

function PageBottom() {
    return (
        <>
        <div className='page-bottom-main'>
            <div className='bottom-logo'>
                <img className='bottom-img' src={BottomLogo} alt='bottom-logo'/>
            </div>
            <div className='bottom-details'>
                    <div className='info-relate'>
                        <ul className='list-style'>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>  
                    </div>
                    <div className='info-relate'>
                        <ul className='list-style'>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurants near me</li>
                        </ul>  
                    </div>
            </div>
        </div>
    </>
    )
}

export default PageBottom
