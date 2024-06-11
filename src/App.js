import appStyles from './App.module.sass';
import {useState} from "react";
import bgImage from './assets/images/bg.png'
import Calculator from "./Components/Calculator";
import CalcStyles from "./assets/styles/calculator.module.sass";


function App() {
    document.title = 'Calculator'
    document.body.style.backgroundImage = `url(${bgImage})`

    const [bg, setBg] = useState({
        mode: 'light',
        body: appStyles.AppWrapperLight,
        calculator: CalcStyles.calcLight,
        displayDarkImage: 'block',
        displayLightImage: 'none',
        displayStyles: {borderColor: '#0085FF', color: '#454545'},
        calcButton: CalcStyles.calcButtonLight,
        calcButtonFill: '#454545',
        functionalCalcButtonFill: '#ffffff',
        functionalCalcButton: CalcStyles.functionalButtonLight,

    })

    document.body.className = bg.body
    const [history, setHistory] = useState('')
    const [calculations, setCalculations] = useState('')
    const [currentCalculations, setCurrentCalculations] = useState('')

    let firstOperand = calculations.split(' ')[0]
    let secondOperand = calculations.split(' ').length === 3 ? calculations.split(' ')[2] : ''
    const toggleBg = () => {
        bg.mode === 'dark'
            ? setBg({
                ...bg,
                mode: 'light',
                body: appStyles.AppWrapperLight,
                calculator: CalcStyles.calcLight,
                displayDarkImage: 'block',
                displayLightImage: 'none',
                displayStyles: {borderColor: '#0085FF', color: '#454545'},
                calcButton: CalcStyles.calcButtonLight,
                functionalCalcButton: CalcStyles.functionalButtonLight,
                calcButtonFill: '#454545',
                functionalCalcButtonFill: '#ffffff',
            })
            : setBg({
                ...bg,
                mode: 'dark',
                body: appStyles.AppWrapperDark,
                calculator: CalcStyles.calcDark,
                displayDarkImage: 'none',
                displayLightImage: 'block',
                displayStyles: {borderColor: '#FFFFFF', color: '#FFFFFF'},
                calcButton: CalcStyles.calcButtonDark,
                functionalCalcButton: CalcStyles.functionalButtonDark,
                calcButtonFill: '#FFFFFF',
                functionalCalcButtonFill: '#006fff',
            })
    }

    function doCalcs(operand1, operand2 = null, sign) {
        if (secondOperand) {
            if (sign === '+') {
                return +operand1 + +operand2
            } else if (sign === '-') {
                return +operand1 - +operand2
            } else if (sign === '*') {
                return +operand1 * +operand2
            } else if (sign === '/') {
                if (+operand2 === 0) {
                    setHistory('')
                    return 'Division by 0 is not possible'
                } else {
                    return +operand1 / +operand2
                }
            }
        } else {
            if (sign === '+') {
                return +operand1 + +operand1
            } else if (sign === '-') {
                return +operand1 - +operand1
            } else if (sign === '*') {
                return +operand1 * +operand1
            } else if (sign === '/') {
                return +operand1 / +operand1
            } else if (sign === '%') {
                return +operand1 / 100
            }
        }
    }

    function cancel() {
        setCalculations('')
        setCurrentCalculations('')
        setHistory('')
    }

    function back() {
        setHistory(history.slice(0, history.length - 1))
        setCalculations(calculations.slice(0, calculations.length - 1))
        setCurrentCalculations(currentCalculations.slice(0, currentCalculations.length - 1))
    }

    function doPositiveOrNegative() {
        if (calculations.split(' ').length === 1) {
            if (calculations[0] === '-') {
                setCalculations(calculations.slice(1,))
                setCurrentCalculations(currentCalculations.slice(1,))

            } else {
                setCalculations('-' + calculations)
                setCurrentCalculations('-' + currentCalculations)
                setHistory('-' + history)
            }
        } else {
            if (calculations[0] === '-') {
                setCalculations(calculations.slice(1,))
                setCurrentCalculations(currentCalculations.slice(1,))
                setHistory(history.slice(0, history.lastIndexOf(currentCalculations)) + history.slice(history.lastIndexOf(currentCalculations) + 1))

            } else {
                setCalculations('-' + calculations)
                setCurrentCalculations('-' + currentCalculations)
                setHistory(history.slice(0, history.lastIndexOf(currentCalculations)) + '-' + history.slice(history.lastIndexOf(currentCalculations),))
            }
        }
    }

    const doCalculations = (value) => {
        let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
        let calcSigns = ['+', '-', '*', '/', '%',]
        if (value === 'ce') {
            cancel()
        } else if (value === 'back') {
            back()
        } else if (value === '+/-') {
            doPositiveOrNegative()
        } else if (nums.includes(value)) {
            setHistory(history + value)
            setCalculations(calculations + value)
            if (history[history.length - 2] === '=') {
                setHistory(value)
                setCurrentCalculations(value)
                setCalculations(value)
            } else {
                calculations.split(' ').length === 3
                    ? setCurrentCalculations(calculations.split(' ')[2] + value)
                    : setCurrentCalculations(currentCalculations + value)
            }
        } else if (calcSigns.includes(value)) {
            setHistory(history + ' ' + value + ' ')
            setCalculations(calculations + ' ' + value + ' ')
            if (firstOperand && calculations.split(' ')[1]) {
                doCalcs(firstOperand, secondOperand, calculations.split(' ')[1])
                setCurrentCalculations(`${doCalcs(firstOperand, secondOperand, calculations.split(' ')[1])}`)
                setCalculations(`${doCalcs(firstOperand, secondOperand, calculations.split(' ')[1])}` + ' ' + value + ' ')
                firstOperand = currentCalculations
            }
            if (history[history.length - 1] === '=') {
                setHistory(currentCalculations + value)
            }
        } else if (value === '=') {
            setHistory(history + ' ' + value + ' ')
            doCalcs(+firstOperand, +secondOperand, calculations.split(' ')[1],)
            setCurrentCalculations(`${doCalcs(firstOperand, secondOperand, calculations.split(' ')[1])}`)
            firstOperand = currentCalculations
            setCalculations(`${doCalcs(firstOperand, secondOperand, calculations.split(' ')[1])}`)
        }
    }
    return (
        <div
            className={appStyles.wrapper}>
            <Calculator
                toggleBg={toggleBg}
                history={history}
                currentCalculations={currentCalculations}
                bg={bg} doCalculations={doCalculations}
            />
        </div>
    );
}

export default App;
