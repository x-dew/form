import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Step_1 from "./component/step-1/step_1";
import Step_2 from "./component/step-2/step_2";
import Step_3 from "./component/step-3/step_3";



function App() {
    const [step,setStep] = useState(Step_1)
    console.log(step)
    return (
        <div className="App">
                <div className='home'>
                    <ul className='steps'>
                        <li className='step-link'>STEP 1</li>
                        <li className='step-link'>STEP 2</li>
                        <li className='step-link'>STEP 3</li>
                    </ul>
                </div>
            {step}
                <div className='btn'>
                        <button className='next-link' disabled>Back</button>
                        <button className='next-link' onClick={()=>{
                            console.log('ljljlj')
                        }}>Next</button>
                </div>
        </div>
    );
}

export default App;
