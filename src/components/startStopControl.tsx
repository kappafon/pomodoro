import * as React from 'react'
import './startStopControl.scss'

export interface StartStopControlProps {
    onClick(): void
}

const StartStopControl: React.FC<StartStopControlProps> = props => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onClick()
    }

    return (
        <button id="start_stop" onClick={onClick}>
            START/STOP
        </button>
    )
}

export default StartStopControl
