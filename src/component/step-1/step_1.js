import React from "react";

const Step_1 = ()=>{
return(
    <div>
        <h1>Fill your personal data</h1>
        <div className='form-group'>
            <label htmlFor="1">Username</label>
            <input type="text" placeholder='Name' id='1'/>
        </div>
        <div className='form-group'>
            <label htmlFor="2">E-mail</label>
            <input type="email" placeholder='example@mail.com' id='2'/>
        </div>
        <div className='form-group'>
            <label htmlFor="3">Url</label>
            <input type="url" placeholder='https://themeforest.net' id='3'/>
        </div>
        <div className='form-group'>
            <label htmlFor="4">Password</label>
            <input type="password" placeholder='password' id='4'/>
        </div>
    </div>
)
}

export default Step_1