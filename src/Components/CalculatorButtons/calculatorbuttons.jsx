import { create, all } from 'mathjs'


// CSS
import './calculatorbuttons.css'


export default function CalculatorButtons({ className, value, setEquation, equation }) {

    const math = create(all,  {})


    const calc = (num) => {
        if (num.toString() === 'C') {
            setEquation('')
        }
        else if (num.toString() === '=') {
            setEquation(math.evaluate(equation))
        }
        else {
            setEquation(equation + num)
        }

    }

    return (
        <button className={`${className} calculator-buttons`} onClick={() => calc(value)}>
            {value}
        </button>
    )
}