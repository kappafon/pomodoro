import * as React from 'react'
import './timer.scss'
import { CycleType } from '../containers/pomodoro'

export interface DisplayProps {
    cycle: CycleType
    seconds: number
}

const Timer: React.FC<DisplayProps> = props => {
    const renderSeconds = () => {
        const seconds = '00' + (props.seconds % 60)
        return seconds.slice(-2)
    }

    const renderMinutes = () => {
        const minutes = '00' + Math.floor(props.seconds / 60)
        return minutes.slice(-2)
    }

    return (
        <section className="timer__container">
            <span id="timer-label">{CycleType[props.cycle]}</span>
            <div id="time-left">
                {renderMinutes()}:{renderSeconds()}
            </div>
        </section>
    )
}

export default Timer
