import * as React from 'react'
import './sound.scss'

export interface SoundProps {
    state: boolean
    onClick(state: boolean): void
}

const Sound: React.FC<SoundProps> = props => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onClick(!props.state)
    }

    return (
        <section id="temp" className="sound__container">
            <button onClick={onClick}>SOUND</button>
        </section>
    )
}

export default Sound
