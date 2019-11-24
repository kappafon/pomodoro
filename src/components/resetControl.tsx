import * as React from 'react'
import './resetControl.scss'

export interface ResetControlProps {
    onClick(): void
}

const ResetControl: React.FC<ResetControlProps> = props => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onClick()
    }

    return (
        <button id="reset" onClick={onClick}>
            RESET
        </button>
    )
}

export default ResetControl
