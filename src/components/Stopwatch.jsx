import { useState, useRef, useCallback } from 'react'
import './Stopwatch.css'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [laps, setLaps] = useState([])
    const intervalRef = useRef(null)

    const start = useCallback(() => {
        if (!isRunning) {
            setIsRunning(true)
            const startTime = Date.now() - time
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime)
            }, 10)
        }
    }, [isRunning, time])

    const stop = useCallback(() => {
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }, [])

    const reset = useCallback(() => {
        setIsRunning(false)
        clearInterval(intervalRef.current)
        setTime(0)
        setLaps([])
    }, [])

    const lap = useCallback(() => {
        setLaps(prev => [time, ...prev])
    }, [time])

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.floor((ms % 60000) / 1000)
        const centiseconds = Math.floor((ms % 1000) / 10)
        return {
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
            centiseconds: String(centiseconds).padStart(2, '0'),
        }
    }

    const { minutes, seconds, centiseconds } = formatTime(time)

    return (
        <div className="stopwatch">
            <div className="stopwatch-display">
                <div className="time-ring">
                    <svg className="ring-svg" viewBox="0 0 200 200">
                        <circle className="ring-bg" cx="100" cy="100" r="90" />
                        <circle
                            className="ring-progress"
                            cx="100"
                            cy="100"
                            r="90"
                            strokeDasharray={`${(time % 60000) / 60000 * 565.48} 565.48`}
                        />
                    </svg>
                    <div className="time-digits">
                        <span className="digit-group">{minutes}</span>
                        <span className="separator">:</span>
                        <span className="digit-group">{seconds}</span>
                        <span className="separator">.</span>
                        <span className="digit-group centis">{centiseconds}</span>
                    </div>
                </div>
            </div>

            <div className="stopwatch-controls">
                {!isRunning ? (
                    <button className="btn btn-start" onClick={start} aria-label="Start stopwatch">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Start
                    </button>
                ) : (
                    <button className="btn btn-stop" onClick={stop} aria-label="Stop stopwatch">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        Stop
                    </button>
                )}
                <button className="btn btn-lap" onClick={lap} disabled={!isRunning} aria-label="Record lap">
                    Lap
                </button>
                <button className="btn btn-reset" onClick={reset} disabled={time === 0} aria-label="Reset stopwatch">
                    Reset
                </button>
            </div>

            {laps.length > 0 && (
                <div className="laps-container">
                    <h3>Laps</h3>
                    <ul className="laps-list" role="list">
                        {laps.map((lapTime, index) => {
                            const f = formatTime(lapTime)
                            return (
                                <li key={index} className="lap-item">
                                    <span className="lap-number">Lap {laps.length - index}</span>
                                    <span className="lap-time">{f.minutes}:{f.seconds}.{f.centiseconds}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Stopwatch
