import { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [display, setDisplay] = useState('0')
    const [equation, setEquation] = useState('')
    const [shouldReset, setShouldReset] = useState(false)

    const handleNumber = (num) => {
        if (shouldReset) {
            setDisplay(num)
            setShouldReset(false)
        } else {
            setDisplay(display === '0' ? num : display + num)
        }
    }

    const handleOperator = (op) => {
        setShouldReset(true)
        setEquation(display + ' ' + op + ' ')
    }

    const handleEqual = () => {
        if (!equation) return
        try {
            const expression = equation + display
            // Safe evaluation using Function constructor
            const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '')
            const result = new Function(`return ${sanitized}`)()
            const formatted = Number.isInteger(result)
                ? result.toString()
                : parseFloat(result.toFixed(8)).toString()
            setDisplay(formatted)
            setEquation('')
            setShouldReset(true)
        } catch {
            setDisplay('Error')
            setEquation('')
            setShouldReset(true)
        }
    }

    const handleClear = () => {
        setDisplay('0')
        setEquation('')
        setShouldReset(false)
    }

    const handleDelete = () => {
        if (display.length === 1 || display === 'Error') {
            setDisplay('0')
        } else {
            setDisplay(display.slice(0, -1))
        }
    }

    const handleDecimal = () => {
        if (shouldReset) {
            setDisplay('0.')
            setShouldReset(false)
        } else if (!display.includes('.')) {
            setDisplay(display + '.')
        }
    }

    const handlePercent = () => {
        const value = parseFloat(display) / 100
        setDisplay(value.toString())
        setShouldReset(true)
    }

    const buttons = [
        { label: 'C', action: handleClear, type: 'function' },
        { label: '⌫', action: handleDelete, type: 'function' },
        { label: '%', action: handlePercent, type: 'function' },
        { label: '÷', action: () => handleOperator('/'), type: 'operator' },
        { label: '7', action: () => handleNumber('7'), type: 'number' },
        { label: '8', action: () => handleNumber('8'), type: 'number' },
        { label: '9', action: () => handleNumber('9'), type: 'number' },
        { label: '×', action: () => handleOperator('*'), type: 'operator' },
        { label: '4', action: () => handleNumber('4'), type: 'number' },
        { label: '5', action: () => handleNumber('5'), type: 'number' },
        { label: '6', action: () => handleNumber('6'), type: 'number' },
        { label: '−', action: () => handleOperator('-'), type: 'operator' },
        { label: '1', action: () => handleNumber('1'), type: 'number' },
        { label: '2', action: () => handleNumber('2'), type: 'number' },
        { label: '3', action: () => handleNumber('3'), type: 'number' },
        { label: '+', action: () => handleOperator('+'), type: 'operator' },
        { label: '0', action: () => handleNumber('0'), type: 'number zero' },
        { label: '.', action: handleDecimal, type: 'number' },
        { label: '=', action: handleEqual, type: 'equals' },
    ]

    return (
        <div className="calculator">
            <div className="calc-display">
                <div className="calc-equation" aria-live="polite">{equation}</div>
                <div className="calc-result" aria-live="polite">{display}</div>
            </div>
            <div className="calc-buttons" role="group" aria-label="Calculator buttons">
                {buttons.map((btn) => (
                    <button
                        key={btn.label}
                        className={`calc-btn ${btn.type}`}
                        onClick={btn.action}
                        aria-label={btn.label === '⌫' ? 'Delete' : btn.label}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Calculator
