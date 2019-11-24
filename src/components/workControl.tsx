import * as React from 'react'
import './workControl.scss'

export interface WorkControlProps {
    workTime: number
    changeWorkTime(value: number): void
}

const WorkControl: React.FC<WorkControlProps> = props => {
    // let audio: React.RefObject<HTMLAudioElement> = React.createRef()

    // React.useEffect(() => {
    //     if (props.pressed) audio.current!.play()
    // })

    const onPlusClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.workTime === 60) return
        props.changeWorkTime(props.workTime + 1)
    }

    const onMinusClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.workTime === 1) return
        props.changeWorkTime(props.workTime - 1)
    }

    return (
        <div id="temp" className="work-control__container">
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={onMinusClick}>
                -
            </button>
            <span id="session-length">{props.workTime}</span>
            <button id="session-increment" onClick={onPlusClick}>
                +
            </button>
        </div>
    )
}

export default WorkControl
