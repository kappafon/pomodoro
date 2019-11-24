import * as React from 'react'
import './timerControl.scss'
import WorkControl from '../components/workControl'
import BreakControl from '../components/breakControl'

export interface TimerControlProps {
    workTime: number
    changeWorkTime(value: number): void
    breakTime: number
    changeBreakTime(value: number): void
}

const TimerControl: React.FC<TimerControlProps> = props => {
    return (
        <section className="timer-control__container">
            <div className="timer-control__controls">
                <BreakControl breakTime={props.breakTime} changeBreakTime={props.changeBreakTime} />
                <WorkControl workTime={props.workTime} changeWorkTime={props.changeWorkTime} />
            </div>
        </section>
    )
}

export default TimerControl
