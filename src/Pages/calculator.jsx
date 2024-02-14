import react from 'react';

// CSS 
import './calculator.css'

// Components
import CalculatorUI from '../Components/CalculatorUI/calculatorui';

export default function Calculator() {


    return (
        <div className='calculator-wrapper'>
            <CalculatorUI />
        </div>
    )
}