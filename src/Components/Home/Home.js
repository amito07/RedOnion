import React from 'react'
import '../Home/Home.css'
import BodyItems from '../Body/BodyItems'
import BodyBottom from '../Body/BodyBottom'
import PageBottom from '../Bottom/PageBottom'

function Home() {
    return (
        <>
            <div class="banner-image">
                <div class="banne-search">
                    <form>
                        <input className="LoginScreen_input_area"  type="email" placeholder="Search food items"/>
                        <button className="LoginScreen_getStart">Search</button>
                    </form>
                </div>
            </div> 
            <div className='body-selection'>
                <div className='body-title'>Breakfast</div>
                <div className='body-title'>Lunch</div>
                <div className='body-title'>Dinner</div>
            </div>  
            <BodyItems/>
            <div className='body-checkoutbtn'>
                <button className='body-btn' >Checkout Your Food</button>
            </div>
            <BodyBottom/>
            <PageBottom/>

        </>
    )
}

export default Home
