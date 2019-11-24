import * as React from 'react'
import './pomodoro.scss'
import Timer from '../components/timer'
import TimerControl from './timerControl'
import RunControl from './runControl'

export enum CycleType {
    Session = 'Session',
    Break = 'Break',
}

const initialState = {
    isPaused: true,
    cycle: CycleType.Session,
    seconds: 25 * 60,
    workTime: 25,
    breakTime: 5,
}

export interface PomodoroProps {}
const Pomodoro: React.FC<PomodoroProps> = props => {
    let audio: React.RefObject<HTMLAudioElement> = React.createRef()

    // React.useEffect(() => {
    //     if (props.pressed) audio.current!.play()
    // })

    const [isPaused, setIsPaused] = React.useState<boolean>(initialState.isPaused)
    const [cycle, setCycle] = React.useState<CycleType>(initialState.cycle)
    const [workTime, setWorkTime] = React.useState<number>(initialState.workTime)
    const [breakTime, setBreakTime] = React.useState<number>(initialState.breakTime)
    const [seconds, setSeconds] = React.useState<number>(initialState.seconds)

    const changeWorkTime = (value: number) => {
        setWorkTime(value)
        setSeconds(value * 60)
    }

    const changeBreakTime = (value: number) => {
        setBreakTime(value)
    }

    const onResetClick = () => {
        setIsPaused(true)
        setCycle(initialState.cycle)
        setWorkTime(initialState.workTime)
        setBreakTime(initialState.breakTime)

        setSeconds(25 * 60)

        audio.current!.pause()
        audio.current!.currentTime = 0
    }

    function startTimer() {
        setIsPaused(false)
    }
    function pauseTimer() {
        setIsPaused(true)
    }

    React.useEffect(() => {
        if (!seconds) {
            audio.current!.play()
            if (cycle === CycleType.Session) {
                setCycle(CycleType.Break)
                setSeconds(breakTime * 60)
            }
            if (cycle === CycleType.Break) {
                setCycle(CycleType.Session)
                setSeconds(workTime * 60)
            }
            return
        }
        const interval = setInterval(() => {
            console.log(seconds)
            if (!isPaused) {
                setSeconds(seconds - 1)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [seconds, isPaused])

    return (
        <div className="pomodoro">
            <main className="pomodoro__container" id="pomodoro">
                <h1>Pomodoro Clock</h1>
                <Timer cycle={cycle} seconds={seconds} />
                <TimerControl
                    workTime={workTime}
                    changeWorkTime={changeWorkTime}
                    breakTime={breakTime}
                    changeBreakTime={changeBreakTime}
                />
                <RunControl
                    onResetClick={onResetClick}
                    onStartStopClick={isPaused ? startTimer : pauseTimer}
                />
                <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={audio} />
            </main>
        </div>
    )
}

export default Pomodoro
