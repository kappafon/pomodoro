import * as React from 'react'
import './breakControl.scss'

export interface BreakControlProps {
    breakTime: number
    changeBreakTime(value: number): void
}

const BreakControl: React.FC<BreakControlProps> = props => {
    // let audio: React.RefObject<HTMLAudioElement> = React.createRef()

    // React.useEffect(() => {
    //     if (props.pressed) audio.current!.play()
    // })

    const onPlusClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.breakTime === 60) return
        props.changeBreakTime(props.breakTime + 1)
    }

    const onMinusClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.breakTime === 1) return
        props.changeBreakTime(props.breakTime - 1)
    }

    return (
        <div className="break-control__container">
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={onMinusClick}>
                -
            </button>
            <span id="break-length">{props.breakTime}</span>
            <button id="break-increment" onClick={onPlusClick}>
                +
            </button>
        </div>
    )
}

export default BreakControl
