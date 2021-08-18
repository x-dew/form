import React from "react";

const Step_2 = ()=>{
    return(
        <div>
            <h1>What’s your address</h1>
            <div className='form-group'>
                <label htmlFor="1">Country</label>
                <input type="text" placeholder='Select country' id='1'/>
            </div>
            <div className='form-group'>
                <label htmlFor="2">City</label>
                <input type="text" placeholder='City name' id='2'/>
            </div>
            <div className='form-group'>
                <label htmlFor="3">Address</label>
                <input type="text" placeholder='Street name' id='3'/>
                <input type="text" placeholder='Building' id='3'/>
            </div>
            <div className='form-group'>
                <label htmlFor="4">ZIP Code</label>
                <input type="text"  id='4'/>
            </div>
        </div>
    )
}

export default Step_2