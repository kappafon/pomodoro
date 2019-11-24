import * as React from 'react'
import './runControl.scss'
import StartStopControl from '../components/startStopControl'
import ResetControl from '../components/resetControl'

export interface RunControlProps {
    onStartStopClick(): void
    onResetClick(): void
}

const RunControl: React.FC<RunControlProps> = props => {
    return (
        <section className="run-control__container">
            <div className="run-control__controls">
                <StartStopControl onClick={props.onStartStopClick} />
                <ResetControl onClick={props.onResetClick} />
            </div>
        </section>
    )
}

export default RunControl
