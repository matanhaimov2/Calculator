import { useState, useEffect } from 'react';

// CSS
import './calculatorui.css'

// Sub Components
import CalculatorButtons from '../CalculatorButtons/calculatorbuttons';
import CalculatorScreen from '../CalculatorScreen/calculatorscreen';


export default function CalculatorUI() {

    // States 
    const [equation, setEquation] = useState('');

    useEffect(() => {
        console.log(equation)

    }, [equation])

    const btnValues = [
        ["C", "(", ")", "/"],
        [7, 8, 9, "*"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ]


    return (
        <div className='calculator-ui-wrapper'>
            <div className='calculator-ui-screen-wrapper'>
                <CalculatorScreen value={equation ? equation : '0'} />
            </div>

            <div className='calculator-ui-buttons-wrapper'>
                {btnValues.flat().map((btn, i) => {
                    return (
                        <CalculatorButtons key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            setEquation = {setEquation}
                            equation ={equation}
                        />
                    );
                })
                }
            </div>
        </div>
    )
}