import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Step_1 from "./component/step-1/step_1";
import Step_2 from "./component/step-2/step_2";
import Step_3 from "./component/step-3/step_3";


function App() {
    const [step, setStep] = useState(Step_1)
    const [next, setNext] = useState('Next')
    console.log(step)

    return (
        <div className="App">
            <div className='home'>
                <ul className='steps'>
                    <li className='step-link active-link'>STEP 1</li>
                    <li className='step-link'>STEP 2</li>
                    <li className='step-link'>STEP 3</li>
                </ul>
            </div>
            {step}
            <div className='btn'>
                <button className='disabled'
                        onClick={() => {
                            setNext('Next')
                            if (step.props.className === 'step-2') {
                                setStep(Step_1)
                                document.querySelector('.disabled').classList.remove('next-link')
                            } else {
                                setStep(Step_2)
                            }
                        }}
                        disabled={step.props.className === 'step-1'}>Back
                </button>
                <button className='next-link ' onClick={() => {
                    document.querySelector('.disabled').classList.add('next-link')
                    if (step.props.className === 'step-1') {
                        setStep(Step_2)
                    } else {
                        setStep(Step_3)
                        setNext('Submit')
                    }
                }}>{next}</button>
            </div>
        </div>
    );
}

export default App;
